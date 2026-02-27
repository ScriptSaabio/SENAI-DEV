// --- Conversor de Medidas de Fábrica ---

// Erro 1 - mlPorLitro definido como string ("1000") → corrigido para número (1000) para garantir 
// operações matemáticas corretas.
const mlPorLitro = 1000;

// Erro 2 - Função converterMlParaLitro utilizava multiplicação (*) → corrigido para divisão (/) 
// para converter ml em litros corretamente.
function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro;
  return resultado;
}

// Erro 3 - Função converterLitroParaMl utilizava soma (+) → corrigido para multiplicação (*)
//  para converter litros em ml corretamente.
function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro;
  return resultado;
}


const producaoDia = {
  lote1: 5000, // ml
  lote2: 3, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");

// Erro 4 - Variável const estoqueBaixo = true; declarada mas não utilizada → 
// comentada para evitar variável desnecessária no código.
// const estoqueBaixo = true;

// Erro 5 - Uso de atribuição na condição (producaoDia.lote1 = 0) → corrigido para comparação lógica na verificação.
// Erro 6 - Condição verificava apenas lote1 → ajustada para verificar se lote1 e lote2 estão zerados
//  antes de exibir o alerta.
if ((producaoDia.lote1 == 0 && producaoDia.lote2 == 0)) {
  console.log("Atenção: Estoque zerado!");
}
