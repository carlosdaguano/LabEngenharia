function Carro() {

    // Atributos
    let marca;
    let modelo;
    let ano;
    let cor;
    let kilometragem;
    let valorFipe;

    // SETs e GETs
    this.setMarca = function (vMarca) { this.marca = vMarca; }
    this.setModelo = function (vModelo) { this.modelo = vModelo; }
    this.setAno = function (vAno) { this.ano = vAno; }
    this.setCor = function (vCor) { this.cor = vCor; }
    this.setKilometragem = function (vKilometragem) { this.kilometragem = vKilometragem; }
    this.setValorFipe = function (vValorFipe) { this.valorFipe = vValorFipe; }

    this.getMarca = function () { return this.marca; }
    this.getModelo = function () { return this.modelo; }
    this.getAno = function () { return this.ano; }
    this.getCor = function () { return this.cor; }
    this.getKilometragem = function () { return this.kilometragem; }
    this.getValorFipe = function () { return this.valorFipe; }

    // Construtor
    this.consCarro = function(vMarca, vModelo, vAno, vCor, vKilometragem, vValorFipe) {
        this.setMarca(vMarca);
        this.setModelo(vModelo);
        this.setAno(vAno);
        this.setCor(vCor);
        this.setKilometragem(vKilometragem);
        this.setValorFipe(vValorFipe);
    }

    // Metodos
    this.anosUtilizacao = function () {
        let dataAtual = new Date();
        let anos = dataAtual.getFullYear() - this.ano;
        return anos;
    }

    this.valorMercado = function () {
        let anoAtual = new Date().getFullYear();
        let valorCarro;
        
        let kilometrosPorAno = this.kilometragem / (anoAtual - this.ano);

        if (kilometrosPorAno < 30000)
            return this.valorFipe * 110 / 100;
        if (kilometrosPorAno <= 50000)
            return this.valorFipe;
        return this.valorFipe * 90 / 100;
    }
}

function criarCarro() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let kilometragem = document.getElementById("kilometragem").value;
    let valorFipe = document.getElementById("valorFipe").value;
    let carro = new Carro();
    carro.consCarro(marca, modelo, ano, cor, kilometragem, valorFipe);

    document.getElementById("anosUtilizacao").innerHTML = `Anos Utilizados: ${carro.anosUtilizacao()}`;
    document.getElementById("valorMercado").innerHTML = "Valor de Mercado:" + carro.valorMercado();
}