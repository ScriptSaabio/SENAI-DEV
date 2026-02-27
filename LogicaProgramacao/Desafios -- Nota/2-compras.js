// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, 
// onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. 
// Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.


// Erro 1 - Preço definido como string ("150,00") → 
// alterado para número (150.00) para permitir cálculos matemáticos corretos.
const produto = {
  nome: "Teclado Gamer",
  preco: 150.00,
  estoque: 10,
};

// Erro 2 - Função de desconto subtraía valor fixo (- 20) → 
// ajustada para calcular 20% do valor (valor - (valor * 0.2)).
// Desconto em porcentagem
function aplicarDesconto(valor) {
  return valor - (valor * 0.2);
}

// Erro 3 - Variável preco inexistente ao chamar a função → 
// corrigido para produto.preco.
const precoFinal = aplicarDesconto(produto.preco);


// Erro 4 - Estoque sendo subtraído por string ("um") → 
// corrigido para número (1) para evitar erro de operação matemática.
produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);
