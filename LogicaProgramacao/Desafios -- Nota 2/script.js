import { produtos } from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll('.btnCurva'),
    containerDisplay: document.querySelector("#containerDisplay"),
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



    elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque);
}
