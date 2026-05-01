const form = document.getElementById('formulario');
const listaVisual = document.getElementById('listaAlunos');

function lerDados() {
    const dadosJSON = localStorage.getItem('meu_banco_jason');
    return dadosJSON ? JSON.parse(dadosJSON) : [];
}

function salvarDados(lista) {
   const dadosJSON = JSON.stringify(lista);
   localStorage.setItem('meu_banco_jason', dadosJSON);
}

function limparDados() {
    if (confirm("Deseja apagar todos os alunos?")) {
        localStorage.removeItem('meu_banco_json');
        atualizacao();
    }
}


function atualizacao() {
   const alunos = lerDados();
   listaVisual.innerHTML = alunos.map((a) => `<li>${a.nome} - ${a.idade} anos - ${a.curso} - ${a.modulo}</li>`).join('');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const novoAluno = new Alunos(
        document.getElementById('nome').value,
        parseInt(document.getElementById('idade').value),
        document.getElementById('curso').value,
        document.getElementById('modulo').value
    );
    const alunos = lerDados();
    alunos.push(novoAluno);

    salvarDados(alunos);
    atualizacao();

    form.reset();
});

