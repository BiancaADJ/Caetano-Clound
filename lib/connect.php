<?php
$servername = "localhost";
$username = "root"; // Usuário padrão do MySQL no XAMPP
$password = "148663"; // Por padrão, a senha do MySQL no XAMPP é vazia
$dbname = "caetanoClound";
// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);
// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
echo "Conectado com sucesso!";

// Verificar o login
$sql = "SELECT * from `users` WHERE `login` = 'bianca.coelho' AND `password` = '148663'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(['success' => true, 'message' => 'Login bem-sucedido']);
} else {
    echo json_encode(['success' => false, 'message' => 'Login falhou']);
}


?>