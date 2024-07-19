<?php

namespace App\Adapter;

class JsonPersistence implements PersistenceInterface
{
    private $filePath;

    public function __construct(string $filePath = 'data/products.json')
    {
        $this->filePath = $filePath;
    }

    public function save(array $productData): bool
    {
        $products = $this->loadData();
        $products[] = $productData;
        return $this->writeData($products);
    }

    public function find(int $id): ?array
    {
        $products = $this->loadData();
        foreach ($products as $product) {
            if ($product['id'] == $id) {
                return $product;
            }
        }
        return null;
    }

    public function delete(int $id): bool
    {
        $products = $this->loadData();
        foreach ($products as $index => $product) {
            if ($product['id'] == $id) {
                unset($products[$index]);
                return $this->writeData($products);
            }
        }
        return false;
    }

    public function update(int $id, array $productData): bool
    {
        $products = $this->loadData();
        foreach ($products as $index => $product) {
            if ($product['id'] == $id) {
                $products[$index] = array_merge($product, $productData);
                return $this->writeData($products);
            }
        }
        return false;
    }

    private function loadData(): array
    {
        if (!file_exists($this->filePath)) {
            return [];
        }
        $json = file_get_contents($this->filePath);
        return json_decode($json, true) ?? [];
    }

    private function writeData(array $products): bool
    {
        $json = json_encode($products, JSON_PRETTY_PRINT);
        return file_put_contents($this->filePath, $json) !== false;
    }
}
