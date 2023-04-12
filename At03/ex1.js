let lista = [];
function inserir(l){
    let valor = document.getElementById("valor").value;
    l.push(valor);
    listar(l);
    document.getElementById("valor").value = '';
}

function listar(l){
    l.sort();
    document.getElementById("lista").innerHTML = "";
    for(let i = 0; i < lista.length; i++){
        let item = document.createElement('LI');
        let valor = document.createTextNode(l[i]);
        item.appendChild(valor);
        document.getElementById('lista').append(item);
    }
}