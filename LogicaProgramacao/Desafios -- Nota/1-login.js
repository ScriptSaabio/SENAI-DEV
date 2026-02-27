// --- Sistema de login ---
// Objetivo deste código é simular um processo de login, onde o usuário tenta acessar o 
// sistema usando um nome de usuário e senha pré-cadastrados. Identifique se há erros na 
// lógica de execução do código e corrija-os, se necessário.

// Os valores de usuário e senha cadastrados não devem ser alterados.
const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let tentativaUsuario = "Admin";
let tentativaSenha = "1234";

// Erro 1 - Uso de = na comparação do usuário → corrigido para == (ou preferencialmente ===)
//  para realizar comparação em vez de atribuição.
if (
  tentativaUsuario == usuarioCadastrado &&
  tentativaSenha == senhaCadastrada
) {
  console.log("Login realizado com sucesso!");
} 
// Erro 2 - Falta de {} no bloco else → adicionei chaves para que as duas instruções façam parte do else.
else {
  console.log("Usuário ou Senha incorretos!");
  console.log("Tente novamente mais tarde.");
}
