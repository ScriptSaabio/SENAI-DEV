// carrinho.js
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Abrir/fechar sidebar do carrinho
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  if (cartSidebar) cartSidebar.classList.toggle("open");
}

// Carregar cardápio na página de cardápio
function carregarCardapio() {
  const pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
  const container = document.getElementById("listaPizzas");
  if (!container) return;
  container.innerHTML = "";

  pizzas.forEach((pizza) => {
    const preco = parseFloat(pizza.preco);

    const card = document.createElement("div");
    card.classList.add("pizza-card");
    card.dataset.categoria = pizza.categoria;
    card.dataset.nome = pizza.nome;
    card.dataset.preco = preco;
    card.dataset.imagem = pizza.imagem;
    card.dataset.ingredientes = pizza.ingredientes;

    card.innerHTML = `
            <div class="pizza-img">
                <img src="${pizza.imagem}" alt="${pizza.nome}">
            </div>
            <div class="pizza-info">
                <h3>${pizza.nome}</h3>
                <p>${pizza.ingredientes}</p>
                <div class="pizza-footer">
                    <span class="preco">R$ ${preco.toFixed(2)}</span>
                    <button class="add-btn">+</button>
                </div>
            </div>
        `;

    container.appendChild(card);
  });

  // Botões de adicionar
  const botoes = container.querySelectorAll(".add-btn");
  botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const card = e.target.closest(".pizza-card");
      adicionarPizza(
        card.dataset.nome,
        parseFloat(card.dataset.preco),
        card.dataset.imagem,
        card.dataset.ingredientes,
      );
    });
  });
}

// Filtrar pizzas por categoria
function filtrarPizza(categoria) {
  const pizzas = document.querySelectorAll(".pizza-card");
  pizzas.forEach((pizza) => {
    pizza.style.display =
      categoria === "todas" || pizza.dataset.categoria === categoria
        ? "block"
        : "none";
  });
}

// Adicionar pizza ao carrinho
function adicionarPizza(nome, preco, imagem, ingredientes) {
  const itemExistente = carrinho.find((item) => item.nome === nome);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, imagem, ingredientes, quantidade: 1 });
  }
  salvarCarrinho();
  atualizarCarrinho();
}

// Atualizar visual do carrinho
function atualizarCarrinho() {
  const container = document.getElementById("cartItems");
  const totalElement = document.getElementById("cartTotal");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    container.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    if (totalElement) totalElement.innerText = "R$ 0,00";
    return;
  }

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    container.innerHTML += `
        <div class="cart-item" style="display:flex; gap:10px; align-items:center; margin-bottom:15px;">
            <img src="${item.imagem}" alt="${item.nome}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
            <div style="flex:1;">
                <strong>${item.nome}</strong>
                <p style="font-size:12px; margin:2px 0;">${item.ingredientes}</p>
                <span style="font-size:14px;">R$ ${item.preco.toFixed(2)} x ${item.quantidade} = R$ ${subtotal.toFixed(2)}</span>
            </div>
            <button onclick="removerItem(${index})" style="background:red; color:white; border:none; border-radius:4px; cursor:pointer;">x</button>
        </div>
        `;
  });

  if (totalElement) totalElement.innerText = "R$ " + total.toFixed(2);
}

// Remover item ou diminuir quantidade
function removerItem(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    carrinho.splice(index, 1);
  }
  salvarCarrinho();
  atualizarCarrinho();
}

// Salvar no localStorage
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Enviar pedido pelo WhatsApp
function enviarWhats() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio");
    return;
  }

  let mensagem = "Pedido La Fiamma:%0A";
  let total = 0;

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    mensagem += `- ${item.nome} x${item.quantidade} R$${subtotal.toFixed(2)}%0A`;
    total += subtotal;
  });

  mensagem += `%0ATotal: R$${total.toFixed(2)}`;
  window.open(`https://wa.me/5511999999999?text=${mensagem}`);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Se tiver cardápio, carrega
  if (document.getElementById("listaPizzas")) carregarCardapio();
  atualizarCarrinho();

  // Filtros de categoria
  const botoesFiltros = document.querySelectorAll(".filtro");
  botoesFiltros.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesFiltros.forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      filtrarPizza(botao.dataset.categoria);
    });
  });
});
