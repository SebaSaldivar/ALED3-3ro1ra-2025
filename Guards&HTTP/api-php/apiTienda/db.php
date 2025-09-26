<?php
$DB_HOST = 'localhost';
$DB_NAME = 'tienda_demo';      // <- la base que creaste
$DB_USER = 'root';             // XAMPP por defecto
$DB_PASS = '';                 // XAMPP por defecto

try {
  $pdo = new PDO(
    "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
    $DB_USER,
    $DB_PASS,
    [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
  );
} catch (PDOException $e) {
  http_response_code(500);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode(['error' => 'Error de conexión a la base']);
  exit;
}
