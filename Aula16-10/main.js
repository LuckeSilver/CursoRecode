
function catchName () {
  let name = document.getElementById('nome').value;
  let sname = document.getElementById('snome').value;
  let login = document.getElementById('login').value;
  let password = document.getElementById('senha1').value;
  let password2 = document.getElementById('senha2').value;
  let email = document.getElementById('email').value;
  let tel = document.getElementById('tel').value;
  let endereco = document.getElementById('endereco').value;
  if (name != "" && sname != "" && login != "" && password != "" && password2 != "" && email != "" && tel != "" && endereco != "") {
    alert(`Parabéns, ${name} ${sname}, seu cadastro foi efetuado com Sucesso!`);
    }
  }

