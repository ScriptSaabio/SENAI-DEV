let carrinho = [];

function toggleCart(){
    document.getElementById("cartSidebar").classList.toggle("open");
}

function adicionarPizza(nome, preco){

    carrinho.push({nome, preco});

    atualizarCarrinho();
}

function atualizarCarrinho(){

    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    container.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {

        total += item.preco;

        container.innerHTML += `
        <div class="cart-item">
            <span>${item.nome}</span>
            <span>R$ ${item.preco}</span>
        </div>
        `;

    });

    totalElement.innerText = "R$ " + total.toFixed(2);
}

function enviarWhats(){

    let mensagem = "Pedido La Fiamma:%0A";

    let total = 0;

    carrinho.forEach(item => {

        mensagem += `- ${item.nome} R$${item.preco}%0A`;
        total += item.preco;

    });

    mensagem += `%0ATotal: R$${total.toFixed(2)}`;

    window.open(`https://wa.me/5511999999999?text=${mensagem}`);
}