import { produtos } from "./produtos.js";

/* ****************** INSTRUÇÕES *********************** 

1- Importe o array de produtos do arquivo "produtos.js" para o arquivo "exercicios.js" para realizar as operações necessárias. 
2- Todas as soluções devem ser implementadas utilizando FUNÇÕES (com ou sem parâmetros, de acordo com a necessidade).
3- Ao finalizar os exercícios, você deve criar um repositório público no Github chamado "arrays" e enviar o link no grupo do WhatsApp ou através do email: tiago.guimaraes@sp.senai.br

Data da entrega: até 19/03/2026 */

// ********************* CENÁRIO ************************

/* O supermercado Care4 deseja implementar um sistema de gerenciamento de estoque para otimizar suas operações. O sistema deve ser capaz de listar os produtos com base em sua rotatividade (alta, média ou baixa) e curva ABC (A, B ou C). Além disso, o sistema deve identificar quais produtos precisam ser repostos com base em critérios específicos, como rotatividade alta e curva ABC A. O objetivo é garantir que os produtos mais importantes estejam sempre disponíveis para os clientes, evitando faltas e otimizando o espaço de armazenamento.

************* Critérios para reposição ***************************
 
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

// ******************** EXERCÍCIOS ***************************

// 1- Crie uma função que liste todos id's e os nomes dos produtos em estoque.

// 2- Crie uma função que liste todos os produtos em estoque, de acordo com a curva ABC (A, B ou C) selecionada pelo usuário.

// 3- Crie uma função que liste todos os produtos em estoque, de acordo com a rotatividade selecionada pelo usuário.

// 4- Crie uma função que liste todos os produtos com base na seleção de rotatividade (alta, média ou baixa) e curva ABC (A, B ou C) pelo usuário.

// 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.

// 6- Crie uma função que calcule o valor total do estoque, considerando o preço de compra e a quantidade em estoque de cada produto.

// 7- Crie uma função que aplique um desconto de 10% no preço de venda de todos os produtos de baixa rotatividade e curva C e
//  exiba a nova lista de produtos com os preços atualizados.

// 8- Crie uma função que permita ao usuário adicionar um novo produto ao estoque, solicitando as informações necessárias 
// (nome, preço de compra, preço de venda, quantidade em estoque, rotatividade e curva ABC).

// 9- Crie uma função que permita ao usuário remover um produto do estoque, solicitando o id a ser removido.

// 10- Crie uma função que permita ao usuário atualizar as informações de um produto existente no estoque,
//  solicitando o id do produto e as novas informações a serem atualizadas.

// 1
function ListarIDsENome(){ 
    let lista = produtos.map(p => ({ id: p.id, produto: p.nome }));
    return lista;
}

// 2
function ListarProdutosPorCurva(curva){
    let lista = produtos.filter(p => p.curva_abc === curva.toUpperCase());
    return lista;
}

// 3
function ListarProdutosPorRotatividade(rotatividade){
    let lista = produtos.filter(p => p.rotatividade === rotatividade.toLowerCase());
    return lista;
}

// 4
function listarCurvaRotatividade(rotatividade, curva){
    let lista = produtos.filter(p => 
        p.rotatividade === rotatividade.toLowerCase() &&
        p.curva_abc === curva.toUpperCase()
    );
    return lista;
}

// 5
function estoqueMinimo(rot, curva){
    const tabela = {
        alta: { A: 100, B: 80, C: 50 },
        media: { A: 80, B: 60, C: 30 },
        baixa: { A: 50, B: 30, C: 10 }
    };

    return tabela[rot][curva];
}

function reporEstoque(){
    let lista = produtos.filter(p => {
        let minimo = estoqueMinimo(p.rotatividade, p.curva_abc);
        return p.estoque < minimo;
    });

    return lista;
}

// 6
function valorTotalEstoque(){
    let total = produtos.reduce((soma, p) => {
        return soma + (p.preco_compra * p.estoque);
    }, 0);

    return total;
}

// 7
function DescontoPrecoVenda(){
    let lista = produtos
        .filter(p => p.rotatividade === "baixa" && p.curva_abc === "C")
        .map(p => ({
            ...p,
            preco_venda: p.preco_venda * 0.9
        }));

    return lista;
}

// 8
function adicionarNovoProduto(novoProduto){
    produtos.push(novoProduto);
}

// 9
function deletarProdutoID(id){
    let index = produtos.findIndex(p => p.id === id);

    if(index !== -1){
        produtos.splice(index, 1);
    }
}

// 10
function atualizarProduto(id, novosDados){
    let produto = produtos.find(p => p.id === id);

    if(produto){
        Object.assign(produto, novosDados);
    }
}

/* ================= INTERFACE (TELA) ================= */

// renderizar produtos
function render(lista){
    let tbody = document.getElementById("lista");
    tbody.innerHTML = "";

    lista.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nome}</td>
                <td>R$ ${p.preco_compra}</td>
                <td>R$ ${p.preco_venda}</td>
                <td>${p.estoque}</td>
                <td>${p.rotatividade}</td>
                <td>${p.curva_abc}</td>
            </tr>
        `;
    });
}

/* ================= BOTÕES ================= */

window.listarTodos = function(){
    render(produtos);
};

window.filtrar = function(){
    let rot = document.getElementById("rotatividade").value;
    let curva = document.getElementById("curva").value;

    let resultado;

    if(rot && curva){
        resultado = listarCurvaRotatividade(rot, curva);
    } else if(rot){
        resultado = ListarProdutosPorRotatividade(rot);
    } else if(curva){
        resultado = ListarProdutosPorCurva(curva);
    } else {
        resultado = produtos;
    }

    render(resultado);
};

window.verReposicao = function(){
    render(reporEstoque());
};

window.valorTotal = function(){
    alert("Valor total: R$ " + valorTotalEstoque());
};

window.adicionar = function(){
    let novo = {
        id: produtos.length + 1,
        nome: document.getElementById("nome").value,
        preco_compra: Number(document.getElementById("precoCompra").value),
        preco_venda: Number(document.getElementById("precoVenda").value),
        estoque: Number(document.getElementById("quantidade").value),
        rotatividade: document.getElementById("rot").value,
        curva_abc: document.getElementById("cur").value
    };

    adicionarNovoProduto(novo);
    render(produtos);
};