const display = document.getElementById("display");

// Botões numéricos
document.getElementById("btn1").addEventListener("click", () => {
    display.value += "1";
});

document.getElementById("btn2").addEventListener("click", () => {
    display.value += "2";
});

document.getElementById("btn3").addEventListener("click", () => {
    display.value += "3";
});

document.getElementById("btn4").addEventListener("click", () => {
    display.value += "4";
});

document.getElementById("btn5").addEventListener("click", () => {
    display.value += "5";
});

document.getElementById("btn6").addEventListener("click", () => {
    display.value += "6";
});

document.getElementById("btn7").addEventListener("click", () => {
    display.value += "7";
});

document.getElementById("btn8").addEventListener("click", () => {
    display.value += "8";
});

document.getElementById("btn9").addEventListener("click", () => {
    display.value += "9";
});

document.getElementById("btn0").addEventListener("click", () => {
    display.value += "0";
});

// Operadores
document.getElementById("btnMais").addEventListener("click", () => {
    display.value += "+";
});

document.getElementById("btnMenos").addEventListener("click", () => {
    display.value += "-";
});

document.getElementById("btnVezes").addEventListener("click", () => {
    display.value += "*";
});

document.getElementById("btnDividir").addEventListener("click", () => {
    display.value += "/";
});

// Calcular
document.getElementById("calcular").addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
});

// Limpar
document.getElementById("limpar").addEventListener("click", () => {
    display.value = "";
});