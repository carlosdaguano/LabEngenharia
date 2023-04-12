const mensagem = "Venha estudar na Fatec!";
let submensagem = "";
let count = 0;
function show(){
    submensagem = mensagem.substring(0, count);
    ReactDOM.render(submensagem, document.getElementById("root"));
    count++;
    if(count > mensagem.length + 10)
        count = 0;    
}
setInterval(show, 100);