function ePrimo(valor) {
    for (let i = 2; i < valor; i++)
        if (valor % i === 0) {
            return false;
        }
    return valor > 1;
}

let valor = "";
while (!Number(valor)) {
    valor = prompt("Digite um numero:");
}
if (ePrimo(valor)) {
    alert("É primo");
} else {
    alert("Não é primo");
}