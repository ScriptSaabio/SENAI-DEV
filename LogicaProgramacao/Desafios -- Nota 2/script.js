import { produtos } from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll('.btnCurva'),
    containerDisplay: document.querySelector("#containerDisplay"),
    btnListarTodos: document.querySelector("#listarTodos"),
};

console.log(elemento.containerDisplay);


elemento.btnCurva.forEach((item)=>{
    item.addEventListener("click",(evento)=>{
        //console.log(evento.target.id);
        ListarProdutosPorCurvaABC(evento.target.id)
    });
});

function ListarProdutosPorCurvaABC(curva){
    let produtosFiltrados = produtos.filter((produto) => produto.curva_abc === curva);
    // console.table(produtoCurva);
    inserirDadosCurvaABC(produtosFiltrados)
}


function inserirDadosCurvaABC(dados){

    elemento.containerDisplay.innerHTML = ""; //LIMPA O CONTAINER PARA INSERIR OS NOVOS DADOS (EVITANDO DUPLICIDADE DE INFORMAÇÕES)

    //CRIA UM OBJETO PARA GERAR OS PARAGRAFOS (AINDA SEM DADOS - PURO!)
    let colunasGRID = {
    id: document.createElement("p"),
    nome: document.createElement("p"),
    preco_venda: document.createElement("p"),
    estoque: document.createElement("p"),
    };
    //DEFININDO  O VALOR QUE CADA PARAGRAFO TERÁ (EXEMPLO: ID, NONE, PRECO, ESTOQUE)
    colunasGRID.id.innerText = "ID";
    colunasGRID.nome.innerText = "NOME";
    colunasGRID.preco_venda.innerText = "PREÇO_VENDA";
    colunasGRID.estoque.innerText = "ESTOQUE";



    elemento.containerDisplay.append(
        colunasGRID.id, 
        colunasGRID.nome, 
        colunasGRID.preco_venda, 
        colunasGRID.estoque);

    console.table(dados);

    // Variavel para receber os dados do tipo de curva ABC selecionados pelo usuário
    let dadosFiltrados = dados

    // Iteração para criar os parágrafos com os dados filtrados e inseri-los no container
    dadosFiltrados.forEach((item) => {
        let produto = {
            id: document.createElement("p"),
            nome: document.createElement("p"),
            preco_venda: document.createElement("p"),
            estoque: document.createElement("p"),
        };

        produto.id.innerText = item.id;
        produto.nome.innerText = item.nome;
        produto.preco_venda.innerText = item.preco_venda;
        produto.estoque.innerText = item.estoque;

        elemento.containerDisplay.append(produto.id, produto.nome, produto.preco_venda, produto.estoque);

    });
}



elemento.btnListarTodos.addEventListener("click", (evento) => {
    // console.log("Botão 'Listar Todos' clicado");
    ListarTodosProdutos();
});

// let ListarProdutos = produtos.map((produto) => ({id: produto.id, nome: produto.nome, preco_venda: produto.preco_venda, estoque: produto.estoque}));
// return{
//     id: produto.id,
//     nome: produto.nome,
//     preco_venda: produto.preco_venda,
//     estoque: produto.estoque
// }

function ListarTodosProdutos(){
    let produtosMapeados = produtos.map((produto) => ({id: produto.id, nome: produto.nome, preco_venda: produto.preco_venda, estoque: produto.estoque}));
    // console.table(produtosMapeados);
    inserirDadosCurvaABC(produtosMapeados);
}   
