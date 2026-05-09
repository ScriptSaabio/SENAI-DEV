const elemento ={
    button: document.querySelector('button'),
    body: document.querySelector('body'),
    div: document.querySelector('div'),
    h1: document.querySelector('h1')
}

elemento.button.addEventListener('click', () => {
    elemento.body.classList.toggle('dark-mode');
    elemento.button.classList.toggle('dark-mode');

    if(elemento.body.classList.contains('dark-mode')) {
        elemento.h1.textContent = 'Dark Mode Ativado';
    } else {
        elemento.h1.textContent = 'Dark Mode Desativado';
    }

    if(elemento.button.classList.contains('dark-mode')) {
        elemento.button.textContent = 'Light Mode';
    } else {
        elemento.button.textContent = 'Dark Mode';
    }
});