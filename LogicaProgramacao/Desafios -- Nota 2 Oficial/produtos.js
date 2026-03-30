export let produtos = [
  { id: 1, nome: "Coca-cola 2L", preco_venda: 10.0, preco_compra: 5.0, estoque: 100, rotatividade: "alta", curva_abc: "A" },
  { id: 2, nome: "Pepsi 2L", preco_venda: 9.0, preco_compra: 4.5, estoque: 80, rotatividade: "alta", curva_abc: "B" },
  { id: 3, nome: "Fanta Laranja 2L", preco_venda: 8.0, preco_compra: 4.0, estoque: 60, rotatividade: "media", curva_abc: "B" },
  { id: 4, nome: "Água Mineral 500ml", preco_venda: 2.5, preco_compra: 1.0, estoque: 200, rotatividade: "alta", curva_abc: "C" },
  { id: 5, nome: "Cerveja Heineken 330ml", preco_venda: 6.5, preco_compra: 4.2, estoque: 150, rotatividade: "alta", curva_abc: "A" },
  { id: 6, nome: "Suco de Laranja 1L", preco_venda: 12.0, preco_compra: 7.5, estoque: 45, rotatividade: "media", curva_abc: "B" },
  { id: 7, nome: "Energético Red Bull", preco_venda: 15.0, preco_compra: 9.0, estoque: 70, rotatividade: "media", curva_abc: "A" },
  { id: 8, nome: "Vinho Tinto Reservado", preco_venda: 45.0, preco_compra: 25.0, estoque: 30, rotatividade: "baixa", curva_abc: "A" },
  { id: 9, nome: "Whisky 12 Anos", preco_venda: 180.0, preco_compra: 110.0, estoque: 12, rotatividade: "baixa", curva_abc: "A" },
  { id: 10, nome: "Água de Coco 1L", preco_venda: 9.5, preco_compra: 5.0, estoque: 40, rotatividade: "media", curva_abc: "B" },
  { id: 11, nome: "Arroz Branco 5kg", preco_venda: 25.0, preco_compra: 18.0, estoque: 50, rotatividade: "alta", curva_abc: "A" },
  { id: 12, nome: "Feijão Carioca 1kg", preco_venda: 8.5, preco_compra: 5.0, estoque: 120, rotatividade: "alta", curva_abc: "B" },
  { id: 13, nome: "Macarrão Espaguete", preco_venda: 4.5, preco_compra: 2.2, estoque: 90, rotatividade: "alta", curva_abc: "C" },
  { id: 14, nome: "Óleo de Soja 900ml", preco_venda: 7.0, preco_compra: 4.5, estoque: 110, rotatividade: "alta", curva_abc: "B" },
  { id: 15, nome: "Açúcar Refinado 1kg", preco_venda: 4.0, preco_compra: 2.5, estoque: 150, rotatividade: "alta", curva_abc: "B" },
  { id: 16, nome: "Sal Refinado 1kg", preco_venda: 2.0, preco_compra: 0.8, estoque: 60, rotatividade: "media", curva_abc: "C" },
  { id: 17, nome: "Café Torrado 500g", preco_venda: 18.0, preco_compra: 12.0, estoque: 85, rotatividade: "alta", curva_abc: "A" },
  { id: 18, nome: "Leite Integral 1L", preco_venda: 5.5, preco_compra: 3.8, estoque: 200, rotatividade: "alta", curva_abc: "A" },
  { id: 19, nome: "Manteiga com Sal 200g", preco_venda: 12.5, preco_compra: 8.0, estoque: 40, rotatividade: "alta", curva_abc: "B" },
  { id: 20, nome: "Farinha de Trigo 1kg", preco_venda: 5.0, preco_compra: 3.2, estoque: 75, rotatividade: "media", curva_abc: "C" },
  { id: 21, nome: "Detergente Líquido", preco_venda: 2.5, preco_compra: 1.2, estoque: 180, rotatividade: "alta", curva_abc: "C" },
  { id: 22, nome: "Sabão em Pó 1kg", preco_venda: 14.0, preco_compra: 9.5, estoque: 65, rotatividade: "media", curva_abc: "B" },
  { id: 23, nome: "Amaciante 2L", preco_venda: 16.0, preco_compra: 10.0, estoque: 40, rotatividade: "media", curva_abc: "B" },
  { id: 24, nome: "Desinfetante 1L", preco_venda: 6.0, preco_compra: 3.5, estoque: 55, rotatividade: "media", curva_abc: "C" },
  { id: 25, nome: "Esponja de Aço", preco_venda: 3.0, preco_compra: 1.5, estoque: 100, rotatividade: "media", curva_abc: "C" },
  { id: 26, nome: "Papel Higiênico (12 un)", preco_venda: 18.0, preco_compra: 11.0, estoque: 90, rotatividade: "alta", curva_abc: "A" },
  { id: 27, nome: "Creme Dental", preco_venda: 4.5, preco_compra: 2.0, estoque: 130, rotatividade: "alta", curva_abc: "B" },
  { id: 28, nome: "Sabonete Barra", preco_venda: 3.0, preco_compra: 1.2, estoque: 250, rotatividade: "alta", curva_abc: "B" },
  { id: 29, nome: "Shampoo 400ml", preco_venda: 15.0, preco_compra: 9.0, estoque: 50, rotatividade: "media", curva_abc: "B" },
  { id: 30, nome: "Condicionador 400ml", preco_venda: 17.0, preco_compra: 10.5, estoque: 45, rotatividade: "media", curva_abc: "B" },
  { id: 31, nome: "Biscoito Recheado", preco_venda: 3.5, preco_compra: 1.8, estoque: 140, rotatividade: "alta", curva_abc: "C" },
  { id: 32, nome: "Salgadinho de Milho", preco_venda: 6.0, preco_compra: 3.2, estoque: 80, rotatividade: "media", curva_abc: "C" },
  { id: 33, nome: "Chocolate Barra", preco_venda: 7.5, preco_compra: 4.0, estoque: 110, rotatividade: "alta", curva_abc: "B" },
  { id: 34, nome: "Gelatina em Pó", preco_venda: 1.5, preco_compra: 0.6, estoque: 200, rotatividade: "media", curva_abc: "C" },
  { id: 35, nome: "Maionese 500g", preco_venda: 8.0, preco_compra: 4.8, estoque: 65, rotatividade: "media", curva_abc: "B" },
  { id: 36, nome: "Ketchup 400g", preco_venda: 7.0, preco_compra: 4.0, estoque: 70, rotatividade: "media", curva_abc: "B" },
  { id: 37, nome: "Mostarda 200g", preco_venda: 5.5, preco_compra: 3.0, estoque: 60, rotatividade: "baixa", curva_abc: "C" },
  { id: 38, nome: "Molho de Tomate", preco_venda: 2.8, preco_compra: 1.4, estoque: 150, rotatividade: "alta", curva_abc: "C" },
  { id: 39, nome: "Milho em Conserva", preco_venda: 4.0, preco_compra: 2.1, estoque: 95, rotatividade: "media", curva_abc: "C" },
  { id: 40, nome: "Ervilha em Conserva", preco_venda: 4.0, preco_compra: 2.1, estoque: 90, rotatividade: "media", curva_abc: "C" },
  { id: 41, nome: "Sardinha em Lata", preco_venda: 5.5, preco_compra: 3.5, estoque: 80, rotatividade: "media", curva_abc: "C" },
  { id: 42, nome: "Atum em Lata", preco_venda: 9.0, preco_compra: 6.0, estoque: 70, rotatividade: "media", curva_abc: "B" },
  { id: 43, nome: "Pão de Forma", preco_venda: 7.5, preco_compra: 4.5, estoque: 40, rotatividade: "alta", curva_abc: "B" },
  { id: 44, nome: "Torrada Salgada", preco_venda: 5.0, preco_compra: 3.0, estoque: 55, rotatividade: "media", curva_abc: "C" },
  { id: 45, nome: "Geleia de Morango", preco_venda: 14.0, preco_compra: 8.5, estoque: 25, rotatividade: "baixa", curva_abc: "C" },
  { id: 46, nome: "Cereal Matinal", preco_venda: 16.0, preco_compra: 10.0, estoque: 35, rotatividade: "media", curva_abc: "B" },
  { id: 47, nome: "Iogurte Natural", preco_venda: 3.5, preco_compra: 2.0, estoque: 60, rotatividade: "alta", curva_abc: "C" },
  { id: 48, nome: "Queijo Muçarela 1kg", preco_venda: 45.0, preco_compra: 32.0, estoque: 15, rotatividade: "alta", curva_abc: "A" },
  { id: 49, nome: "Presunto Cozido 1kg", preco_venda: 35.0, preco_compra: 24.0, estoque: 20, rotatividade: "alta", curva_abc: "A" },
  { id: 50, nome: "Ovos Brancos (dz)", preco_venda: 12.0, preco_compra: 8.0, estoque: 50, rotatividade: "alta", curva_abc: "B" },
  { id: 51, nome: "Sabão em Barra", preco_venda: 2.5, preco_compra: 1.3, estoque: 100, rotatividade: "media", curva_abc: "C" },
  { id: 52, nome: "Água Sanitária 2L", preco_venda: 5.0, preco_compra: 2.8, estoque: 85, rotatividade: "media", curva_abc: "C" },
  { id: 53, nome: "Limpador Multiuso", preco_venda: 4.8, preco_compra: 2.5, estoque: 110, rotatividade: "alta", curva_abc: "C" },
  { id: 54, nome: "Saco de Lixo 50L", preco_venda: 12.0, preco_compra: 7.0, estoque: 60, rotatividade: "media", curva_abc: "B" },
  { id: 55, nome: "Inseticida Spray", preco_venda: 14.5, preco_compra: 9.0, estoque: 40, rotatividade: "baixa", curva_abc: "B" },
  { id: 56, nome: "Desodorante Roll-on", preco_venda: 11.0, preco_compra: 6.5, estoque: 75, rotatividade: "alta", curva_abc: "B" },
  { id: 57, nome: "Barbeador Descartável", preco_venda: 4.0, preco_compra: 1.8, estoque: 120, rotatividade: "media", curva_abc: "C" },
  { id: 58, nome: "Algodão 100g", preco_venda: 5.5, preco_compra: 3.0, estoque: 50, rotatividade: "baixa", curva_abc: "C" },
  { id: 59, nome: "Hastes Flexíveis (Cotonete)", preco_venda: 4.0, preco_compra: 2.1, estoque: 90, rotatividade: "media", curva_abc: "C" },
  { id: 60, nome: "Absorvente Externo", preco_venda: 8.5, preco_compra: 4.5, estoque: 100, rotatividade: "alta", curva_abc: "B" },
  { id: 61, nome: "Pipoca de Micro-ondas", preco_venda: 4.5, preco_compra: 2.5, estoque: 130, rotatividade: "media", curva_abc: "C" },
  { id: 62, nome: "Batata Palha", preco_venda: 7.0, preco_compra: 4.2, estoque: 85, rotatividade: "media", curva_abc: "C" },
  { id: 63, nome: "Farofa Pronta", preco_venda: 6.0, preco_compra: 3.5, estoque: 70, rotatividade: "media", curva_abc: "C" },
  { id: 64, nome: "Mel de Abelha 250g", preco_venda: 22.0, preco_compra: 14.0, estoque: 20, rotatividade: "baixa", curva_abc: "B" },
  { id: 65, nome: "Vinagre de Álcool", preco_venda: 3.5, preco_compra: 1.8, estoque: 65, rotatividade: "media", curva_abc: "C" },
  { id: 66, nome: "Azeite de Oliva 500ml", preco_venda: 38.0, preco_compra: 26.0, estoque: 40, rotatividade: "media", curva_abc: "A" },
  { id: 67, nome: "Pimenta do Reino 50g", preco_venda: 6.5, preco_compra: 3.5, estoque: 50, rotatividade: "baixa", curva_abc: "C" },
  { id: 68, nome: "Orégano Seco 20g", preco_venda: 4.0, preco_compra: 1.5, estoque: 80, rotatividade: "media", curva_abc: "C" },
  { id: 69, nome: "Fermento Químico", preco_venda: 5.5, preco_compra: 3.2, estoque: 45, rotatividade: "baixa", curva_abc: "C" },
  { id: 70, nome: "Achocolatado 400g", preco_venda: 9.0, preco_compra: 6.2, estoque: 90, rotatividade: "alta", curva_abc: "B" },
  { id: 71, nome: "Frango Inteiro (kg)", preco_venda: 15.0, preco_compra: 10.5, estoque: 30, rotatividade: "alta", curva_abc: "B" },
  { id: 72, nome: "Carne Moída (kg)", preco_venda: 32.0, preco_compra: 24.0, estoque: 25, rotatividade: "alta", curva_abc: "A" },
  { id: 73, nome: "Filé de Frango (kg)", preco_venda: 22.0, preco_compra: 16.0, estoque: 35, rotatividade: "alta", curva_abc: "B" },
  { id: 74, nome: "Costela Bovina (kg)", preco_venda: 28.0, preco_compra: 20.0, estoque: 18, rotatividade: "media", curva_abc: "A" },
  { id: 75, nome: "Salsicha (kg)", preco_venda: 14.0, preco_compra: 9.5, estoque: 40, rotatividade: "media", curva_abc: "B" },
  { id: 76, nome: "Hambúrguer Congelado", preco_venda: 3.5, preco_compra: 1.9, estoque: 120, rotatividade: "media", curva_abc: "C" },
  { id: 77, nome: "Batata Congelada 1kg", preco_venda: 18.0, preco_compra: 12.0, estoque: 50, rotatividade: "media", curva_abc: "B" },
  { id: 78, nome: "Lasanha Congelada", preco_venda: 14.5, preco_compra: 9.0, estoque: 45, rotatividade: "media", curva_abc: "B" },
  { id: 79, nome: "Pizza Congelada", preco_venda: 16.0, preco_compra: 10.5, estoque: 40, rotatividade: "alta", curva_abc: "B" },
  { id: 80, nome: "Pão de Queijo 500g", preco_venda: 12.0, preco_compra: 8.0, estoque: 35, rotatividade: "media", curva_abc: "B" },
  { id: 81, nome: "Maçã Gala (kg)", preco_venda: 9.0, preco_compra: 5.5, estoque: 60, rotatividade: "alta", curva_abc: "B" },
  { id: 82, nome: "Banana Prata (dz)", preco_venda: 7.5, preco_compra: 4.0, estoque: 80, rotatividade: "alta", curva_abc: "B" },
  { id: 83, nome: "Laranja Pera (kg)", preco_venda: 5.0, preco_compra: 2.5, estoque: 100, rotatividade: "alta", curva_abc: "B" },
  { id: 84, nome: "Cebola (kg)", preco_venda: 6.0, preco_compra: 3.2, estoque: 70, rotatividade: "alta", curva_abc: "B" },
  { id: 85, nome: "Alho (200g)", preco_venda: 8.0, preco_compra: 4.5, estoque: 50, rotatividade: "alta", curva_abc: "B" },
  { id: 86, nome: "Batata Inglesa (kg)", preco_venda: 6.5, preco_compra: 3.8, estoque: 110, rotatividade: "alta", curva_abc: "B" },
  { id: 87, nome: "Tomate (kg)", preco_venda: 8.5, preco_compra: 5.0, estoque: 55, rotatividade: "alta", curva_abc: "B" },
  { id: 88, nome: "Cenoura (kg)", preco_venda: 4.5, preco_compra: 2.2, estoque: 65, rotatividade: "media", curva_abc: "C" },
  { id: 89, nome: "Alface Americana", preco_venda: 4.0, preco_compra: 1.5, estoque: 30, rotatividade: "alta", curva_abc: "C" },
  { id: 90, nome: "Ovo de Codorna (30un)", preco_venda: 10.0, preco_compra: 6.5, estoque: 25, rotatividade: "baixa", curva_abc: "C" },
  { id: 91, nome: "Ração para Cães 1kg", preco_venda: 18.0, preco_compra: 12.5, estoque: 50, rotatividade: "media", curva_abc: "A" },
  { id: 92, nome: "Ração para Gatos 1kg", preco_venda: 20.0, preco_compra: 14.0, estoque: 45, rotatividade: "media", curva_abc: "A" },
  { id: 93, nome: "Areia Sanitária 4kg", preco_venda: 15.0, preco_compra: 9.0, estoque: 30, rotatividade: "baixa", curva_abc: "B" },
  { id: 94, nome: "Carvão Vegetal 3kg", preco_venda: 14.0, preco_compra: 8.5, estoque: 60, rotatividade: "media", curva_abc: "B" },
  { id: 95, nome: "Fósforo (caixa c/10)", preco_venda: 4.5, preco_compra: 2.5, estoque: 100, rotatividade: "baixa", curva_abc: "C" },
  { id: 96, nome: "Vela Branca (8 un)", preco_venda: 7.0, preco_compra: 4.0, estoque: 40, rotatividade: "baixa", curva_abc: "C" },
  { id: 97, nome: "Pilhas AA (4 un)", preco_venda: 16.0, preco_compra: 9.5, estoque: 85, rotatividade: "baixa", curva_abc: "B" },
  { id: 98, nome: "Lâmpada LED 9W", preco_venda: 12.0, preco_compra: 6.5, estoque: 70, rotatividade: "baixa", curva_abc: "B" },
  { id: 99, nome: "Papel Alumínio", preco_venda: 5.5, preco_compra: 3.0, estoque: 90, rotatividade: "media", curva_abc: "C" },
  { id: 100, nome: "Filme de PVC", preco_venda: 6.0, preco_compra: 3.5, estoque: 80, rotatividade: "media", curva_abc: "C" },
];

console.log(produtos.length);

// console.table(produtos);

// produtos.push({ id: 101, nome: "Água de Coco", preco_venda: 1.59, preco_compra: 0.8, estoque: 500, rotatividade: "alta", curva_abc: "B" });

// produtos.splice(13, 1);

// console.table(produtos);

// let nomes = produtos.map((produto) => produto.nome);

// let desconto = produtos.map((produto) => ({ ...produto, desconto: produto.preco_venda * 0.9 }));

// console.table(desconto);

// let custoEstoque = produtos.reduce((acumulador, produto) => acumulador + produto.preco_compra * produto.estoque, 0);

// console.log(custoEstoque.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));

// Quero saber quantos itens no total eu tenho em estoque
// Depois quero saber o valor médio de compra de cada produto

// let estoque = produtos.filter((produto) => produto.estoque <= 50);
// console.table(estoque);

// let estoqueFind = produtos.find((produto) => produto.estoque <= 50);
// console.log(estoqueFind);
