<?php

namespace App\Controller;

use App\Adapter\PersistenceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    private $persistence;

    public function __construct(PersistenceInterface $persistence)
    {
        $this->persistence = $persistence;
    }

    /**
     * @Route("/produit/save", name="produit_save")
     */
    public function save(): Response
    {
        $productData = [
            'id' => 1,
            'name' => 'Sample Product',
            'price' => 100
        ];

        $success = $this->persistence->save($productData);

        return new Response($success ? 'Product saved successfully!' : 'Failed to save product.');
    }
}
