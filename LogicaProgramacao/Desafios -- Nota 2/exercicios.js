import {produtos} from "./produtos.js";

/* ****************************** INSTRUÇÕES ******************************* 

1- Importe o array de produtos do arquivo "produtos.js" para o arquivo "exercicios.js" para realizar as operações necessárias. 
2- Todas as soluções devem ser implementadas utilizando FUNÇÕES (com ou sem parâmetros, de acordo com a necessidade).
3- Ao finalizar os exercícios, você deve criar um repositório público no Github chamado "arrays" e enviar o link no grupo do WhatsApp ou através do email: tiago.guimaraes@sp.senai.br

Data da entrega: até 19/03/2026 */

// ******************************** CENÁRIO *******************************

/* O supermercado Care4 deseja implementar um sistema de gerenciamento de estoque para otimizar suas operações. O sistema deve ser capaz de listar os produtos com base em sua rotatividade (alta, média ou baixa) e curva ABC (A, B ou C). Além disso, o sistema deve identificar quais produtos precisam ser repostos com base em critérios específicos, como rotatividade alta e curva ABC A. O objetivo é garantir que os produtos mais importantes estejam sempre disponíveis para os clientes, evitando faltas e otimizando o espaço de armazenamento.

******************************** Critérios para reposição *******************************
 
- Produtos de alta rotatividade e curva ABC A: Estoque mínimo: 100 unidades.
- Produtos de alta rotatividade e curva ABC B: Estoque mínimo: 80 unidades.
- Produtos de alta rotatividade e curva ABC C: Estoque mínimo: 50 unidades.

- Produtos de média rotatividade e curva ABC A: Estoque mínimo: 80 unidades.
- Produtos de média rotatividade e curva ABC B: Estoque mínimo: 60 unidades.
- Produtos de média rotatividade e curva ABC C: Estoque mínimo: 30 unidades.

- Produtos de baixa rotatividade e curva ABC A: Estoque mínimo: 50 unidades.
- Produtos de baixa rotatividade e curva ABC B: Estoque mínimo: 30 unidades.
- Produtos de baixa rotatividade e curva ABC C: Estoque mínimo: 10 unidades.

*/

// ******************************** EXERCÍCIOS *******************************

// 1- Crie uma função que liste todos os produtos em estoque.
function ListarIDsENome(){ 
    let ListarProdutos = produtos.map((produtos) => ({ id: produtos.id, produto: produtos.nome}));
   return ListarProdutos
}
// console.table(ListarIDsENome())

// 2- Crie uma função que liste todos os produtos em estoque, de acordo com a curva ABC (A, B ou C) selecionada pelo usuário.
 function ListarProdutosPorCurva(curva){
    let produtoCurva = produtos.filter(produto => produto.curva_abc === curva.toUpperCase())
    return produtoCurva;
 }
    // console.table(ListarProdutosPorCurva("b"))

// 3- Crie uma função que liste todos os produtos em estoque, de acordo com a rotatividade selecionada pelo usuário.
 function ListarProdutosPorRotatividade(rotatividade){
    let produtoRotatividade = produtos.filter(produto => produto.rotatividade === rotatividade.toLowerCase())
    return produtoRotatividade;
 }
    // console.table(ListarProdutosPorRotatividade("BaIxa"))

// 4- Crie uma função que liste todos os produtos com base na seleção de rotatividade (alta, média ou baixa) e curva ABC (A, B ou C) pelo usuário.
 function listarCurvaRotatividade(rotatividade, curva){
    let selecaoProdutos = produtos.filter(produto=>produto.rotatividade === rotatividade && produto.curva_abc === curva);
    return selecaoProdutos;
 }
 console.table(listarCurvaRotatividade("baixa", "C"));
//Tenso - Kauan s/ Uniforme
// 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.
function reporEstoque(rotatividade, curva) {
    let reporProdutos = produtos.filter(produto=>produto.rotatividade === rotatividade && produto.curva_abc === curva)
    .map(produto => produto);
    return reporProdutos;


}
// 6- FEITO - Crie uma função que calcule o valor total do estoque, considerando o preço de compra e a quantidade em estoque de cada produto.

// 7- Crie uma função que aplique um desconto de 10% no preço de venda de todos os produtos de baixa rotatividade e curva C e exiba a nova lista de produtos com os preços atualizados.
    function DescontoPrecoVenda(rotatividade, curva,){
        let selecaoProdutos = produtos.filter(produto=>produto.rotatividade === "baixa" && produto.curva_abc === "C")
        .map((produto) => ({ ...produto, desconto: produto.preco_venda * 0.9}));

        return selecaoProdutos;
    }

console.table(DescontoPrecoVenda());
// 8- Crie uma função que permita ao usuário adicionar um novo produto ao estoque, solicitando as informações necessárias (nome, preço de compra, preço de venda, quantidade em estoque, rotatividade e curva ABC).
    function adicionarNovoProduto(novoProduto){
    produtos.push (novoProduto);
    console.log("Cadastro Concluído com sucesso");
    console.table(produtos);
    }

    adicionarNovoProduto({id:produtos.length + 1, 
        nome: "Papel Toalha", 
        preco_venda: 8.5, 
        preco_compra: 5.0, 
        estoque: 35, 
        rotatividade: "média", 
        curva_abc: "C" })

         adicionarNovoProduto({id:produtos.length + 1, 
        nome: "Sabonete", 
        preco_venda: 27, 
        preco_compra: 8, 
        estoque: 125, 
        rotatividade: "alta", 
        curva_abc: "A" })
// 9- Crie uma função que permita ao usuário remover um produto do estoque, solicitando o id a ser removido.
            function deletarProdutoID(id){
                let produtoBuscado = produtos.find(produto=> produto.id === id);
                return produtoBuscado


            }
console.table(deletarProdutoID(48));


// 10- Crie uma função que permita ao usuário atualizar as informações de um produto existente no estoque, solicitando o id do produto e as novas informações a serem atualizadas.

// Lembrar de criar uma atividade de conversão

// Lembrar de criar uma atividade de promoção personalizada (by Kauan). OBS:levar a atividade para o curso de mySQL

//Lembrar de criar uma atividade para armazenar os id's que foram deletados.   

//Lembrar de crair atividades de informar o usuário se algum campo ficou em branco

//