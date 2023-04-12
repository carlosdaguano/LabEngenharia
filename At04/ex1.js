function gerarCampos(opcao){  
    let segundaParte = document.getElementById(`segunda-parte`);    
    if (opcao == `professor`){
        segundaParte.innerHTML = `
            <br>
            <div class='row'>
                <div class='col1'>
                    <label for='area'>Área:</label><br>
                    <input class='field' type='text' id='area' placeholder='Digite sua área de atuação.'>
                </div>
                <div class='col1'>
                    <label for='matricula'>Matrícula:</label><br>
                    <input class='field' type='text' id='matricula' placeholder='Digite sua matrícula.'>
                </div>
            </div>
            <label for='lattes'>Lattes:</label>
            <input class='field' type='text' id='lattes' placeholder='Digite aqui o endereço para seu Lattes.'>
        `;
    } else if(opcao == `aluno`){
        segundaParte.innerHTML = `
            <br>
            <div class='row'>
                <div class='col1'>
                    <label for='curso'>Curso:</label><br>
                    <input class='field' type='text' id='curso' placeholder='Digite seu curso.'>
                </div>
                <div class='col1'>
                    <label for='matricula'>Matrícula:</label><br>
                    <input class='field' type='text' id='matricula' placeholder='Digite sua matrícula.'>
                </div>
            </div>
        `;
    }
}

class Pessoa{
    constructor(nome, email, data, telefone_fixo, telefone_celular){
        this.nome = nome;
        this.email = email;
        this.data = data;
        this.telefone_fixo = telefone_fixo;
        this.telefone_celular = telefone_celular;
    }
  
}

class Aluno extends Pessoa{
    constructor(nome, email, data, telefone_fixo, telefone_celular, curso, matricula){
        super(nome, email, data, telefone_fixo, telefone_celular);
        this.curso = curso;
        this.matricula = matricula;
    }
}

class professor extends Pessoa{
    constructor(nome, email, data, telefone_fixo, telefone_celular, area, matricula, lattes){
        super(nome, email, data, telefone_fixo, telefone_celular)
        this.area = area;
        this.matricula = matricula;
        this.lattes = lattes;
    }
}

const form = document.getElementById('form');
const opcoes = document.querySelectorAll('input[name="opcao"]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let selecionado;
    for (const opcao of opcoes){
        if(opcao.checked){
            selecionado = opcao.value;
            break;
        }
    }

    if (selecionado == 'Aluno'){
        let aluno = new Aluno(
            document.getElementById('nome').value,
            document.getElementById('email').value,
            document.getElementById('dataNascimento').value,
            document.getElementById('telefoneFixo').value,
            document.getElementById('telefoneCelular').value,
            document.getElementById('curso').value,
            document.getElementById('matricula').value
        );
            
    } else if (selecionado == 'Professor'){
        if (selecionado == 'Aluno'){
        let professor = new Professor(
            document.getElementById('nome').value,
            document.getElementById('email').value,
            document.getElementById('dataNascimento').value,
            document.getElementById('telefoneFixo').value,
            document.getElementById('telefoneCelular').value,
            document.getElementById('area').value,
            document.getElementById('matricula').value,
            document.getElementById('lattes').value
        );
            
    }
    }

});

