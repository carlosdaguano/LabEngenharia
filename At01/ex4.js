let valor = "";
while (!Number(valor)) {
    valor = prompt("Digite um numero:");
}

let resultado = valor;
while (valor != 1) {
    resultado = resultado * (valor - 1);
    valor = valor - 1;
}
alert(resultado);