const form = document.getElementById('form');
const inputItem = document.getElementById('inputItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const item = inputItem.value.trim();
    if (item !== '') {
        
        // Criando o elemento que contem o valor do item
        let item_lista = document.createElement('span');
        item_lista.appendChild(document.createTextNode(item));
        
        // Criando os botões do item
        // Botão para subir o item
        let botao_up = document.createElement('button');
        botao_up.setAttribute('class', 'btn-up');
        botao_up.appendChild(document.createTextNode('↑'));

        // Botão para descer o item
        let botao_down = document.createElement('button');
        botao_down.setAttribute('class', 'btn-down');
        botao_down.appendChild(document.createTextNode('↓'));

        // Botão para deletar o item
        let botao_delete = document.createElement('button');
        botao_delete.setAttribute('class', 'btn-delete');
        botao_delete.appendChild(document.createTextNode('×'));
        
        // Divisão que contem os botões
        let botoes = document.createElement('div')
        botoes.setAttribute('class', 'btn-group');
        botoes.appendChild(botao_up);
        botoes.appendChild(botao_down);
        botoes.appendChild(botao_delete);

        // Linha que contem o item e os botões
        let linha = document.createElement('li');
        linha.appendChild(item_lista);
        linha.appendChild(botoes);

        // Agregando a linha a lista
        lista.appendChild(linha);
        inputItem.value = '';
    }
});

lista.addEventListener('click', (evento) =>{
    // Alvo do evento 'click'
    const alvo = evento.target; 

    // Caso o alvo seja um dos botões fazer:
    // Subir item
    if (alvo.classList.contains('btn-up')){
        const linha = alvo.closest('li');
        const linha_anterior = linha.previousElementSibling;
        if (linha_anterior){
            lista.insertBefore(linha, linha_anterior);
        }
    // Descer item
    } else if (alvo.classList.contains('btn-down')){
        const linha = alvo.closest('li');
        const linha_proxima = linha.nextElementSibling;
        if (linha_proxima){
            lista.insertBefore(linha_proxima, linha);
        }
    // Deletar Item
    } else if (alvo.classList.contains('btn-delete')){
        const linha = alvo.closest('li');
        lista.removeChild(linha);
    }

});