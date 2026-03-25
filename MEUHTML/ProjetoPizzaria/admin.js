// PROTEGER PÁGINA ADMIN

if(window.location.pathname.includes("admin.html")){

if(localStorage.getItem("adminLogado") !== "true"){

window.location.href="admin-login.html";

}

}



// LOGIN

function loginAdmin(){

const usuario=document.getElementById("usuario").value;

const senha=document.getElementById("senha").value;

if(usuario==="admin" && senha==="1234"){

localStorage.setItem("adminLogado","true");

window.location.href="admin.html";

}

else{

document.getElementById("erro").innerText="Usuário ou senha incorretos";

}

}



// CADASTRAR PIZZA

function salvarPizza(){

let pizzas=JSON.parse(localStorage.getItem("pizzas")) || [];

const novaPizza={

nome:document.getElementById("nome").value,

ingredientes:document.getElementById("ingredientes").value,

preco:document.getElementById("preco").value,

categoria:document.getElementById("categoria").value,

imagem:document.getElementById("imagem").value

};

pizzas.push(novaPizza);

localStorage.setItem("pizzas",JSON.stringify(pizzas));

alert("Pizza cadastrada!");

mostrarPizzas();

}



// LISTAR PIZZAS

function mostrarPizzas(){

const lista=document.getElementById("listaPizzas");

if(!lista) return;

let pizzas=JSON.parse(localStorage.getItem("pizzas")) || [];

lista.innerHTML="";

pizzas.forEach((pizza,index)=>{

lista.innerHTML+=`

<div class="pizza-admin">

<img src="${pizza.imagem}">

<h3>${pizza.nome}</h3>

<p>${pizza.ingredientes}</p>

<span>R$ ${pizza.preco}</span>

<button onclick="removerPizza(${index})">Excluir</button>

</div>

`;

});

}



// EXCLUIR PIZZA

function removerPizza(index){

let pizzas=JSON.parse(localStorage.getItem("pizzas"));

pizzas.splice(index,1);

localStorage.setItem("pizzas",JSON.stringify(pizzas));

mostrarPizzas();

}



mostrarPizzas();