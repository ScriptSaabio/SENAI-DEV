// PROTEÇÃO ADMIN
if(window.location.pathname.includes("admin.html")){
    if(localStorage.getItem("adminLogado") !== "true"){
        window.location.href = "admin-login.html";
    } else {
        carregarListaPizzas();
    }
}

// LOGIN
function loginAdmin(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "1234"){
        localStorage.setItem("adminLogado","true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("erro").innerText = "Usuário ou senha incorretos";
    }
}

// LOGOUT
function logoutAdmin(){
    localStorage.removeItem("adminLogado");
    window.location.href = "admin-login.html";
}

// ABRIR FORMULÁRIO
function abrirForm(){
    const form = document.getElementById("formPizza");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

// SALVAR PIZZA
function salvarPizza() {
    const novaPizza = {
        nome: document.getElementById("nome").value,
        ingredientes: document.getElementById("ingredientes").value,
        preco: document.getElementById("preco").value,
        categoria: document.getElementById("categoria").value,
        imagem: document.getElementById("imagem").value
    };

    let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
    pizzas.push(novaPizza);
    localStorage.setItem("pizzas", JSON.stringify(pizzas));

    alert("Pizza cadastrada!");
    carregarListaPizzas();
    limparForm();
}

// LIMPAR FORM
function limparForm(){
    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "tradicional";
    document.getElementById("imagem").value = "";
}

// CARREGAR LISTA DE PIZZAS
function carregarListaPizzas(){
    const pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
    const tbody = document.getElementById("listaPizzas");
    tbody.innerHTML = "";

    pizzas.forEach((pizza, index) => {
        tbody.innerHTML += `
            <tr>
                <td><img src="${pizza.imagem}" alt="${pizza.nome}" width="80"></td>
                <td>${pizza.nome}</td>
                <td>${pizza.categoria}</td>
                <td>R$ ${pizza.preco}</td>
                <td>
                    <button onclick="deletarPizza(${index})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

// DELETAR PIZZA
function deletarPizza(index){
    let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
    pizzas.splice(index, 1);
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
    carregarListaPizzas();
}