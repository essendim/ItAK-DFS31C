<?php

namespace App\Adapter;

interface PersistenceInterface
{
    /**
     * Save a product.
     *
     * @param array $productData
     * @return bool
     */
    public function save(array $productData): bool;

    /**
     * Retrieve a product by its ID.
     *
     * @param int $id
     * @return array|null
     */
    public function find(int $id): ?array;

    /**
     * Delete a product by its ID.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool;

    /**
     * Update a product by its ID.
     *
     * @param int $id
     * @param array $productData
     * @return bool
     */
    public function update(int $id, array $productData): bool;
}
?>