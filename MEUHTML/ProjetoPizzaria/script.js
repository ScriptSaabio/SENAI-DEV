let carrinho=JSON.parse(localStorage.getItem("carrinho")) || [];



// ABRIR CARRINHO

function toggleCart(){

document.getElementById("cartSidebar").classList.toggle("open");

}



// CARREGAR CARDÁPIO

function carregarCardapio(){

const pizzas=JSON.parse(localStorage.getItem("pizzas")) || [];

const container=document.querySelector(".pizzas");

container.innerHTML="";

pizzas.forEach(pizza=>{

let preco=pizza.preco.toString().replace(",", ".");

container.innerHTML+=`

<div class="pizza-card" data-categoria="${pizza.categoria}">

<div class="pizza-img">
<img src="${pizza.imagem}">
</div>

<div class="pizza-info">

<h3>${pizza.nome}</h3>

<p>${pizza.ingredientes}</p>

<div class="pizza-footer">

<span class="preco">R$ ${pizza.preco}</span>

<button onclick="adicionarPizza('${pizza.nome}', ${preco})">
+
</button>

</div>

</div>

</div>

`;

});

}



// FILTRAR PIZZAS

function filtrarPizza(categoria){

const pizzas=document.querySelectorAll(".pizza-card");

pizzas.forEach(pizza=>{

if(categoria==="todas"){

pizza.style.display="block";

}

else{

pizza.style.display=pizza.dataset.categoria===categoria
? "block"
: "none";

}

});

}



// ADICIONAR AO CARRINHO

function adicionarPizza(nome,preco){

preco=parseFloat(preco);

carrinho.push({nome,preco});

salvarCarrinho();

atualizarCarrinho();

}



// ATUALIZAR CARRINHO

function atualizarCarrinho(){

const container=document.getElementById("cartItems");

const totalElement=document.getElementById("cartTotal");

container.innerHTML="";

let total=0;

if(carrinho.length===0){

container.innerHTML=`<p class="empty-cart">Seu carrinho está vazio</p>`;

totalElement.innerText="R$ 0,00";

return;

}



carrinho.forEach((item,index)=>{

total+=item.preco;

container.innerHTML+=`

<div class="cart-item">

<span>${item.nome}</span>

<span>R$ ${item.preco.toFixed(2)}</span>

<button onclick="removerItem(${index})">x</button>

</div>

`;

});



totalElement.innerText="R$ "+total.toFixed(2);

}



// REMOVER ITEM

function removerItem(index){

carrinho.splice(index,1);

salvarCarrinho();

atualizarCarrinho();

}



// SALVAR CARRINHO

function salvarCarrinho(){

localStorage.setItem("carrinho",JSON.stringify(carrinho));

}



// ENVIAR WHATSAPP

function enviarWhats(){

if(carrinho.length===0){

alert("Seu carrinho está vazio");

return;

}

let mensagem="Pedido La Fiamma:%0A";

let total=0;



carrinho.forEach(item=>{

mensagem+=`- ${item.nome} R$${item.preco.toFixed(2)}%0A`;

total+=item.preco;

});



mensagem+=`%0ATotal: R$${total.toFixed(2)}`;



window.open(`https://wa.me/5511999999999?text=${mensagem}`);

}



// INICIAR

carregarCardapio();

atualizarCarrinho();