// Valida de o script foi carregado corretamente ao abrir a página em ferramentas de desenvolvedor (F12) e verificar o console do navegador. Se "OK" aparecer, o script foi carregado com sucesso.
console.log("OK");

// Objeto para armazenar as informações do paciente, como nome, peso, altura e imc
// Foi declarado como const, pois as propriedades de um objeto podem ser modificadas, mas a referência ao objeto em si não..
const paciente = {
  nome: "",
  peso: 0,
  altura: 0,
  imc: 0,
};

// Importação dos elementos da árvore do DOM (documento HTML)
const elemento = {
  form: document.querySelector("#formulario"),
  inputNome: document.querySelector("#nome"),
  inputPeso: document.querySelector("#peso"),
  inputAltura: document.querySelector("#altura"),
  btnCalcular: document.querySelector("#btnCalcular"),
  resultado: document.querySelector("#resultado")
};

// Adiciona um "ouvinte" na pagina. Ele vai monitorar o evento de submit do formulário e se ele ocorrer, irá disparar uma função anônima que impede o comportamento de reload automático da página. Isso é necessário para que o JavaScript tenha tempo para processar os dados dos inputs.
elemento.form.addEventListener("submit", function (evento) {
  // Impede o comportamento padrão de envio do formulário, que recarregaria a página
  evento.preventDefault();
});

elemento.btnCalcular.addEventListener("click", function () {
  // Testa se o evento de click do botão dispara uma mensagem no console
  console.log("Pressionou o botão Calcular...");
});

paciente.nome = elemento.inputNome
paciente.peso = elemento.inputPeso
paciente.altura = elemento.inputAltura


// 2. Validação simples para não calcular vazio
    if (!paciente.nome || !paciente.peso || !paciente.altura) {
        resultado.innerText = "Por favor, preencha todos os campos!";
        return;
    }

    // 3. Cálculo do IMC
    paciente.imc = elemento.inputPeso / (elemento.inputAltura ** 2);
    let classificacao = "";

    // 4. Tabela de decisão
    if (paciente.imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (paciente.imc < 25) {
        classificacao = "Peso normal";
    } else if (paciente.imc < 30) {
        classificacao = "Sobrepeso";
    } else if (paciente.imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (paciente.imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // 5. Exibe na tela
    elemento.resultado.innerHTML = `
        <h3>Resultado para ${paciente.nome}:</h3>
        <p>Seu IMC é <strong>${paciente.imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
    `;
