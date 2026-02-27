// --- Calculadora de Consumo de Combustível ---

// Erro 1 - precos.diesel definido como string ("6.20") → corrigido para número (6.20) para permitir cálculo correto.
const precos = {
  gasolina: 5.99,
  alcool: 3.9,
  diesel: 6.20,
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;
  let custoTotal = litrosNecessarios * precoUnitario;

  return custoTotal;
}

// Erro 2 - viagem.distancia definida como string ("200") → alterada para número (200) para evitar conversão
//  implícita na divisão.
const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);
const resultadoAlcool = calcularGasto(viagem.distancia, 7, precos.alcool);
const resultadoDiesel = calcularGasto(viagem.distancia, 10, precos.diesel);

// Erro 3 - Uso da variável custoTotal no console.log fora da função → substituído por resultadoGasolina, 
// que armazena corretamente o retorno da função.
console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + resultadoDiesel.toFixed(2));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina.toFixed(2));
console.log("Custo estimado na Alcool: R$ " + resultadoAlcool.toFixed(2));


// Erro 4 - Corrigindo verificação de qual combustível é mais econômico usando a relação entre os preços, 
// em vez de comparar os resultados diretamente (que podem variar dependendo do consumo).
//  A regra comum é que o álcool é vantajoso se seu preço for menor que 70% do preço da gasolina.
if ((precos.alcool / precos.gasolina) < 0.7) {
  mensagem = "O álcool está compensando!";
  console.log(mensagem);
}



