// let valorCompra = {
//     produto: "Carrinho de Fricção",
//     preco: 35.75,
//     desconto: 0.10, // Desconto em porcentagem
//     total: 0,
// }


// valorCompra.total -= valorCompra.preco * valorCompra.desconto;
// console.log(valorCompra.total);
// valorCompra.total = valorCompra.preco - (valorCompra.preco * valorCompra.desconto);
// console.log(valorCompra.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));


// Fetch API CEP
let cep = "01001000"; // Exemplo de CEP

async function buscarEndereco(cep) {
    
    const url = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
    console.log(url);
}

console.log(buscarEndereco(cep));
