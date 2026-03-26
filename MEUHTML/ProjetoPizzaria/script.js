let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];



function toggleCart(){
document.getElementById("cartSidebar").classList.toggle("open");
}

const botoesFiltros = document.querySelectorAll(".filtro");

botoesFiltros.forEach(botao => {
    botao.addEventListener("click", () => {
        // Remove a classe ativo de todos
        botoesFiltros.forEach(b => b.classList.remove("ativo"));
        // Adiciona a classe ativo no botão clicado
        botao.classList.add("ativo");
        // Chama a função para filtrar pizzas
        filtrarPizza(botao.dataset.categoria);
    });
});

function carregarCardapio(){
    // Pegar pizzas do localStorage
    const pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];

    const container = document.getElementById("listaPizzas");
    container.innerHTML = "";

    pizzas.forEach(pizza => {
        const preco = parseFloat(pizza.preco);

        container.innerHTML += `
        <div class="pizza-card" data-categoria="${pizza.categoria}">
            <div class="pizza-img">
                <img src="${pizza.imagem}">
            </div>
            <div class="pizza-info">
                <h3>${pizza.nome}</h3>
                <p>${pizza.ingredientes}</p>
                <div class="pizza-footer">
                    <span class="preco">R$ ${pizza.preco}</span>
                    <button onclick="adicionarPizza('${pizza.nome}', ${preco})">+</button>
                </div>
            </div>
        </div>
        `;
    });
}


function filtrarPizza(categoria){

const pizzas = document.querySelectorAll(".pizza-card");

pizzas.forEach(pizza=>{

if(categoria==="todas"){
pizza.style.display="block";
}else{
pizza.style.display = pizza.dataset.categoria === categoria ? "block" : "none";
}

});

}



function adicionarPizza(nome,preco){

carrinho.push({nome,preco});

localStorage.setItem("carrinho",JSON.stringify(carrinho));

atualizarCarrinho();

}



function atualizarCarrinho(){

const container = document.getElementById("cartItems");
const totalElement = document.getElementById("cartTotal");

if(!container) return;

container.innerHTML="";

let total=0;

if(carrinho.length===0){

container.innerHTML='<p class="empty-cart">Seu carrinho está vazio</p>';
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



function removerItem(index){

carrinho.splice(index,1);

localStorage.setItem("carrinho",JSON.stringify(carrinho));

atualizarCarrinho();

}



function enviarWhats(){

if(carrinho.length===0){
alert("Carrinho vazio");
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



carregarCardapio();

atualizarCarrinho();