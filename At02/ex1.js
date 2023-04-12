let diasDaSemana = ['Domingo-feira', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let data = new Date;
document.write(diasDaSemana[data.getDay()]+', '+data.getDate()+' de '+meses[data.getMonth()-1]+' de '+data.getFullYear());