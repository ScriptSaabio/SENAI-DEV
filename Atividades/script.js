
/* LOGIN */
const elemento = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  form: document.querySelector("#formLogin"),
  button: document.querySelector("#botao-login"),
};

// LOGIN PADRÃO
const login = [{ usu: "admin@admin.com", ususenha: "123" }];

const dadosDigitados = {
    email: "",
    senha: "",
};

elemento.form.addEventListener("submit", (event) => {
    event.preventDefault();
    getDadosDigitados(elemento.email.value,elemento.senha.value)
  });

function getDadosDigitados(email,senha) {
    dadosDigitados.email = email;
    dadosDigitados.senha = senha;
}

// /* LOGOUT */

// function logout() {
//   localStorage.removeItem("usuarioLogado");

//   // redireciona
//   window.location.href = "index.html";
// }

// /* MENU ATIVO AUTOMÁTICO */
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("nav a");
//   const paginaAtual = window.location.pathname.split("/").pop();

//   links.forEach((link) => {
//     const href = link.getAttribute("href");

//     if (href === paginaAtual || (paginaAtual === "" && href === "index.html")) {
//       link.classList.add("active");
//     }
//   });
// });

// /* ALERTA BOTÕES SAIBA MAIS */
// const botoes = document.querySelectorAll(".card .botao");

// botoes.forEach((botao) => {
//   botao.addEventListener("click", function () {
//     alert("Em breve mais informações sobre este produto.");
//   });
// });

// /* ROLAGEM SUAVE DO MENU */
// document.querySelectorAll("nav a").forEach((link) => {
//   link.addEventListener("click", function () {
//     document.body.style.scrollBehavior = "smooth";
//   });
// });