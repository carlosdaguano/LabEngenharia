let valor = "";
while (!Number(valor)) {
    valor = prompt("Digite um numero:");
}
if (valor % 2 == 0) {
    alert("É par");
} else {
    alert("É impar");
}