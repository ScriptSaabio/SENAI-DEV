// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples,
// onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa.
// Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

// Erro 1 - taxaDolar estava como string ("5,50") → corrigido para número (5.50) para permitir multiplicação correta.
const taxaDolar = 5.5;


// Erro 2 - Função mantinha variável intermediária desnecessária (let resultado + return resultado) → 
// simplificada para return valorDolar * taxaDolar;, retornando o cálculo diretamente.
function converterParaReal(valorDolar) {
  return valorDolar * taxaDolar;
}


// Erro 3 - Variável resultado usada no console.log sem estar declarada → linha removida para evitar erro de referência.
// console.log("O valor convertido é de : R$ " + resultado);


// Erro 4 - transacao.valor estava como string ("100,00") → alterado para número (100.00) para funcionar no cálculo.
const transacao = {
  usuario: "Carlos",
  valor: 150.0,
  concluida: true,
};


// Erro 5 - Função atribuída sem ser executada (const valorFinal = converterParaReal) → 
// corrigido para chamada da função com argumento (converterParaReal(transacao.valor)).
const valorFinal = converterParaReal(transacao.valor);


// Erro 6 - Comparação de concluida com strings "sim" e "não" → 
// corrigido para comparação com valores booleanos true e false.
// Obs: Adicionando R$ antes do valor final
if (transacao.concluida == true) {
  console.log(
    "O valor convertido para " + transacao.usuario + " é: R$" + valorFinal,
  );
}
if (transacao.concluida == false) {
  console.log("Erro no processamento.");
}
