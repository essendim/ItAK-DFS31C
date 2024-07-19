<?php

namespace App\Persistence;

use App\Entity\Produit;

interface ProductPersistenceInterface
{
    public function save(Produit $produit): bool;
}
