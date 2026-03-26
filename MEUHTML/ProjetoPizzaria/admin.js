// PROTEÇÃO ADMIN
if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("adminLogado") !== "true") {
    window.location.href = "admin-login.html";
  } else {
    carregarListaPizzas();
  }
}

// LOGIN ADMIN
function loginAdmin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    localStorage.setItem("adminLogado", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha incorretos";
  }
}

// LOGOUT ADMIN
function logoutAdmin() {
  localStorage.removeItem("adminLogado");
  window.location.href = "admin-login.html";
}

// ABRIR/FECHAR FORMULÁRIO
function abrirForm() {
  const form = document.getElementById("formPizza");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

// SALVAR PIZZA
function salvarPizza() {
  const novaPizza = {
    nome: document.getElementById("nome").value.trim(),
    ingredientes: document.getElementById("ingredientes").value.trim(),
    preco: parseFloat(document.getElementById("preco").value).toFixed(2),
    categoria: document.getElementById("categoria").value,
    imagem: document.getElementById("imagem").value.trim(),
  };

  if (!novaPizza.nome || !novaPizza.preco || !novaPizza.imagem) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
  pizzas.push(novaPizza);
  localStorage.setItem("pizzas", JSON.stringify(pizzas));

  alert("Pizza cadastrada!");
  limparForm();
  carregarListaPizzas();
}

// LIMPAR FORMULÁRIO
function limparForm() {
  document.getElementById("nome").value = "";
  document.getElementById("ingredientes").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("categoria").value = "tradicional";
  document.getElementById("imagem").value = "";
}

// CARREGAR LISTA DE PIZZAS NA TABELA
function carregarListaPizzas() {
  const pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
  const tbody = document.getElementById("listaPizzas");
  tbody.innerHTML = "";

  pizzas.forEach((pizza, index) => {
    const tr = document.createElement("tr");

    // Coluna imagem
    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = pizza.imagem;
    img.alt = pizza.nome;
    tdImg.appendChild(img);
    tr.appendChild(tdImg);

    // Coluna nome
    const tdNome = document.createElement("td");
    tdNome.textContent = pizza.nome;
    tr.appendChild(tdNome);

    // Coluna categoria
    const tdCategoria = document.createElement("td");
    tdCategoria.textContent = pizza.categoria;
    tr.appendChild(tdCategoria);

    // Coluna preço
    const tdPreco = document.createElement("td");
    tdPreco.textContent = `R$ ${pizza.preco}`;
    tr.appendChild(tdPreco);

    // Coluna ação
    const tdAcoes = document.createElement("td");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => deletarPizza(index);
    tdAcoes.appendChild(btnExcluir);
    tr.appendChild(tdAcoes);

    tbody.appendChild(tr);
  });
}

// DELETAR PIZZA
function deletarPizza(index) {
  let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
  pizzas.splice(index, 1);
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
  carregarListaPizzas();
}

// Troca do ícone + / - com animação
const btnNova = document.getElementById("btnNova");
const formPizza = document.getElementById("formPizza");

btnNova.addEventListener("click", () => {
  // Alterna a visibilidade do formulário
  formPizza.style.display =
    formPizza.style.display === "block" ? "none" : "block";

  // Alterna o ícone
  const icon = btnNova.querySelector(".icon");
  if (icon.textContent === "+") {
    icon.textContent = "-";
  } else {
    icon.textContent = "+";
  }

  // Adiciona classe para animação
  btnNova.classList.toggle("active");
});
