
const btn = document.querySelector("#btn");
let output = document.querySelector("#output");

document.querySelector("#myForm").addEventListener("submit", event => {
    event.preventDefault();
    output.innerHTML = "Formulário enviado";
});

console.log(btn);

btn.addEventListener("click", event => {
    console.log(event.type);
});


