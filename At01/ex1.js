let value = prompt("Digite algo: ");
if(confirm("Deseja saber o tipo de dado do que foi digitado?")){
    if (value == "") {
       document.write("Undefined")
    } else if (Number(value)) {
        document.write("Number");
    } else if (value.toLowerCase() == "true" || value.toLowerCase() == "false") {
        document.write("Boolean");
    } else {
        document.write("String");
    }
}else {
    document.write("Obrigado por visitar esta página!");
}