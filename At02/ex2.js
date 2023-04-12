function mostrarRelogio() {
    let relogio = document.getElementById("relogio");
    relogio.innerHTML = new Date().toLocaleTimeString();
    setTimeout(mostrarRelogio, 1000);
}