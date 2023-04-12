function palindromo(){
    let palavra = document.getElementById('palavra').value.toLowerCase();
    let tamanho = palavra.length -1;
    for(let i = 0; i < (tamanho/2); i++){
        if(palavra[i] != palavra[tamanho-i]){
            alert('Não é palindromo');
            return;
        }
    }
    alert('É palindromo');
}