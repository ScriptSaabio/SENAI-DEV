function gerarResultado() {
    // 1. Captura os valores dos inputs
    const nome = document.querySelector("#nome").value;
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);
    const resultado = document.querySelector("#resultado");

    // 2. Validação simples para não calcular vazio
    if (!nome || !peso || !altura) {
        resultado.innerText = "Por favor, preencha todos os campos!";
        return;
    }

    // 3. Cálculo do IMC
    const imc = peso / (altura ** 2);
    let classificacao = "";

    // 4. Tabela de decisão
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // 5. Exibe na tela
    resultado.innerHTML = `
        <h3>Resultado para ${nome}:</h3>
        <p>Seu IMC é <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
    `;
}

// Se quiser exibir no HTML (supondo que tenha um elemento com id="resultado")
// document.querySelector("#resultado").innerText = `O IMC de ${paciente.nome} é ${analise.valor} (${analise.classificacao})`;