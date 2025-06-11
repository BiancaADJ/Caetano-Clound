<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Responde a requisições OPTIONS (pré-flight do CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$servername = "localhost";
$username = "root"; // usuário padrão local
$password = "148663"; // Senha padrão local
$dbname = "caetanoClound";

// Recebendo dados
$data = json_decode(file_get_contents('php://input'), true);
$db_user = $data['bd_user'] ?? '';
$db_pass = $data['bd_pass'] ?? '';
$action = $data['action'] ?? '';

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
  echo json_encode(['success' => false, 'message' => 'Erro de conexão: ' . $conn->connect_error]);
  exit;
}

// Funções JavaScript
switch($action){
  case 'login':
    // Verificar o login
    $sql = "SELECT * from `users` WHERE `login` = '$db_user' AND `password` = '$db_pass'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
      echo json_encode([
      'success' => true,
      'message' => 'Login bem sucedido!',
      'data' => ['user' => $db_user]
      ]);
    } else {
      echo json_encode([
      'success' => false,
      'message' => 'Login falhou!'
      ]);
    }
    break;
}

$conn->close(); 
?>