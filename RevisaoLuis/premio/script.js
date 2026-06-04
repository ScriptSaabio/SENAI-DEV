const btnPromocao = document.getElementById('btnPromocao');
const paragrafo = document.querySelector('p');

btnPromocao.addEventListener('click', () => {
    alert('Parabéns! Você ganhou um prêmio especial!');

    digitei = prompt('Digite seu nome para receber o premio:');

    if (digitei) {
        paragrafo.textContent = `Parabéns, ${digitei}! Seu prêmio foi reservado.`;
    } else {
        paragrafo.textContent = 'Seu prêmio não foi reservado.';
    }
});