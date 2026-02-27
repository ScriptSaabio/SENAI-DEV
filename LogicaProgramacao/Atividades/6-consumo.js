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

// Erro 2 - viagem.distancia definida como string ("200") → alterada para número (200) para evitar conversão implícita na divisão.
const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);
const resultadoAlcool = calcularGasto(viagem.distancia, 7, precos.alcool);
const resultadoDiesel = calcularGasto(viagem.distancia, 10, precos.diesel);

// Erro 3 - Uso da variável custoTotal no console.log fora da função → substituído por resultadoGasolina, que armazena corretamente o retorno da função.
console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + resultadoDiesel.toFixed(2));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina.toFixed(2));
console.log("Custo estimado na Alcool: R$ " + resultadoAlcool.toFixed(2));

if ((precos.alcool / precos.gasolina) < 0.7) {
  mensagem = "O álcool está compensando!";
  console.log(mensagem);
}

// Erro 4 - Variável mensagem declarada com const dentro do if → removido const dentro do bloco para permitir acesso fora dele (ideal seria declarar let mensagem antes do if).
// if (resultadoAlcool < resultadoGasolina && resultadoAlcool < resultadoDiesel) {
//   mensagem = "O álcool está compensando!";
//   console.log(mensagem);
// } else if (resultadoGasolina < resultadoAlcool && resultadoGasolina < resultadoDiesel) {
//   mensagem = "A gasolina está compensando!";
//   console.log(mensagem);
// }else if (resultadoDiesel < resultadoAlcool && resultadoDiesel < resultadoGasolina) {
//   mensagem = "O diesel está compensando!";
//   console.log(mensagem);
// }


