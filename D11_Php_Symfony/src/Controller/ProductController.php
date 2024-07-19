<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Form\ProductType;
use App\Service\ProductAdapter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    private $productAdapter;

    public function __construct(ProductAdapter $productAdapter)
    {
        $this->productAdapter = $productAdapter;
    }

    #[Route('/produit', name: 'produit_create')]
    public function create(Request $request): Response
    {
        $produit = new Produit();
        $form = $this->createForm(ProductType::class, $produit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $success = $this->productAdapter->save($produit);
            return new Response($success ? '<h1>Produit enregistré avec succès !</h1>' : '<h1>Échec de l\'enregistrement du produit.</h1>');
        }

        return $this->render('product/product.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
