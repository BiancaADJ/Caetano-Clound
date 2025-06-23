function login(action){
  if(action === 1){
    // Login comum
    var bd_user = document.querySelector('#login_user').value.trim(); // Remove espaços antes e depois da string
    var bd_pass = document.querySelector('#login_pass').value; // Pega o valor literal

    console.log(`Login: ${bd_user}, ${bd_pass}`);

    fetch('http://localhost:8000/lib/index.php',{
      method: 'POST',
      mode: 'cors', // força requisição CORS
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({bd_user: bd_user, bd_pass: bd_pass, action: 'login'})
    })
    .then(response => response.json())
    .then(data => {
      console.log("Resposta do servidor:", data);

      if(data && data.success){
        console.log("Conexão bem-sucedida! Dados: " + JSON.stringify(data.data));
        window.location.href = "http://localhost:8000/src/main.html";
        localStorage.setItem('bd_user', bd_user);
        localStorage.setItem('bd_pass', bd_pass);
      }else{
        alert("Login e/ou senha inválido");
        console.error("Erro:", data.message);
      }
    })
    .catch(error =>{
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

document.addEventListener('DOMContentLoaded', function(){
  if(window.location.pathname.includes('/src/main.html')){ // Trocar página na versão final
    var bd_user = localStorage.getItem('bd_user');
    var bd_pass = localStorage.getItem('bd_pass');

    fetch('http://localhost:8000/lib/index.php',{
      method: 'POST',
      mode: 'cors', // força requisição CORS
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({bd_user: bd_user, bd_pass: bd_pass, action: 'login'})
    })
    .then(response => response.json())
    .then(data => {
      console.log("Resposta do servidor:", data);

      if(data && data.success){
        console.log("Conexão bem-sucedida! Dados: " + JSON.stringify(data.data));
        document.querySelector("#bem_vindo_nome").textContent = bd_user;
      }else{
        console.error("Erro:", data.message);
        window.location.href = "http://localhost:8000/src/login.html";
        alert("Erro ao carregar a página. Por favor, faça login novamente.");
      }
    })
    .catch(error =>{
      console.error("Erro na requisição:", error);
      alert("Erro de conexão com o servidor.");
      window.location.href = "http://localhost:8000/src/login.html";
    });
  }
});

