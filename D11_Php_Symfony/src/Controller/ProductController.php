<?php
// src/Controller/ProductController.php
namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Service\ProductAdapter;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    private $productAdapter;
    private $produitRepository;

    public function __construct(ProductAdapter $productAdapter, ProductRepository $productRepository)
    {
        $this->productAdapter = $productAdapter;
        $this->produitRepository = $productRepository;
    }

    #[Route('/product', name: 'produit_create')]
    public function create(Request $request): Response
    {
        $produit = new Product();
        $form = $this->createForm(ProductType::class, $produit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $success = $this->productAdapter->save($produit);
            return new Response($success ? '<h1>Product enregistré avec succès !</h1>' : '<h1>Échec de l\'enregistrement du produit.</h1>');
        }

        return $this->render('product/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/product_list', name: 'produit_list')]
    public function list(): Response
    {
        $produits = $this->produitRepository->findAll();
        $threshold = 100; // Exemple de seuil pour afficher ✨

        return $this->render('product/list.html.twig', [
            'produits' => $produits,
            'threshold' => $threshold,
        ]);
    }
}
