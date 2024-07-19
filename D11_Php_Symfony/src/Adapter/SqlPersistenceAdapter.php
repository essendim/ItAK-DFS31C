<?php

namespace App\Adapter;

use Doctrine\DBAL\Connection;

class SqlPersistence implements PersistenceInterface
{
    private $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function save(array $productData): bool
    {
        $sql = "INSERT INTO products (name, price) VALUES (:name, :price)";
        $stmt = $this->connection->prepare($sql);
        return $stmt->execute($productData);
    }

    public function find(int $id): ?array
    {
        $sql = "SELECT * FROM products WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute(['id' => $id]);
        return $stmt->fetch();
    }

    public function delete(int $id): bool
    {
        $sql = "DELETE FROM products WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        return $stmt->execute(['id' => $id]);
    }

    public function update(int $id, array $productData): bool
    {
        $sql = "UPDATE products SET name = :name, price = :price WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        return $stmt->execute(array_merge(['id' => $id], $productData));
    }
}
