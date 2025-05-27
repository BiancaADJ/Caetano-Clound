function login(action){
  if(action === 1){
    // Login comum
    var bd_user = document.querySelector('#main_user').value.trim();
    var bd_pass = document.querySelector('#main_pass').value;

    console.log(`Login: ${bd_user}, ${bd_pass}`);

    fetch('http://localhost:8000/lib/teste.php', {
      method: 'POST',
      mode: 'cors', // força requisição CORS
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bd_user: bd_user, bd_pass: bd_pass })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Resposta do servidor:", data);

      if (data && data.success) {
        console.log("Conexão bem-sucedida! Dados: " + JSON.stringify(data.data));
      } else {
        console.error("Erro:", data.message);
        alert("Login e/ou senha inválido");
      }
    })
    .catch(error => {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão com o servidor.");
    });

  }else if(action === 2){
    // Esqueceu a senha
    alert('Esqueceu a senha');
  }else{
    alert('Erro: parâmetro inválido em login(action)');
  }
}