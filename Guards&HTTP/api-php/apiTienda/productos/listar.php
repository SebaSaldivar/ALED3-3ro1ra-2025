<?php
require_once __DIR__ . '/../_cors.php';
require_once __DIR__ . '/../db.php';
require_once __DIR__ . '/../utils/responder.php';

try {
  $stmt = $pdo->query("SELECT id, nombre, descripcion, precio FROM productos ORDER BY id");
  $rows = $stmt->fetchAll();

  // Aseguramos tipos numéricos en JSON
  foreach ($rows as &$r) {
    $r['id'] = (int)$r['id'];
    $r['precio'] = (float)$r['precio'];
  }

  responderJSON($rows, 200);
  
} catch (Throwable $e) {
  responderJSON(['error' => 'No se pudo listar productos'], 500);
}
