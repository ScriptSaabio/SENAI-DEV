const calcularMedia = document.getElementById('calcularMedia');
const resultado = document.getElementById('resultado');

calcularMedia.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        resultado.textContent = 'Por favor, insira o nome do aluno.';
        return;
    }
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        resultado.textContent = 'Por favor, insira todas as notas.';
        return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao = '';
    if (media >= 7) {
        situacao = 'Aprovado';
    } else {
        situacao = 'Reprovado';
    }

    resultado.innerHTML = `
    <p>Nome: ${nome}</p>
    <p>A média é: ${media.toFixed(2)}</p>
    <p>Resultado: ${situacao}</p>
`;
});