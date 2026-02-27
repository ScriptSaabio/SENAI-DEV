// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar 
// se ele foi aprovado ou reprovado. Identifique os erros presentes no código e corrija-os para que o sistema
//  funcione corretamente.

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;


// Erro 1 - A função calcularMedia() não retornava valor → 
// adicionada a instrução return para que a média possa ser utilizada fora da função.
// Erro 2 - A variável media estava declarada apenas dentro da função → 
// criada a constante media recebendo o retorno da função para uso externo.
function calcularMedia(media) {
  return media = (nota1 + nota2) / 2;
}

const media = calcularMedia();


// Erro 3 - A variável status foi declarada dentro do bloco if/else com const →
// substituída por uma variável resultado declarada fora do bloco para poder ser usada no console.log.
let resultado = "";

if (media >= 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado";
}


// Erro 4 - O console.log utilizava a variável status fora do seu escopo 
// → corrigido para usar a variável resultado, que está acessível no escopo correto.
console.log("O aluno " + nomeAluno + " está: " + resultado);
