const data = new Date();
const p = document.querySelector('.container p');

const opcoes = {
    timeStyle: 'short',
    dateStyle: 'full'
}

const dia = data.getDate();
const mes = data.getMonth();

let mensagem = '';

if (dia === 25 && mes === 11) {
    mensagem = 'FELIZ NATAL!! ';
} else if (dia === 1 && mes === 0) {
    mensagem = 'FELIZ ANO NOVO!! ';
}

const formatoBr = data.toLocaleString('pt-BR', opcoes);
p.innerHTML = `${formatoBr} <br> ${mensagem}`;


function verificarAniversario() {

    const input = document.querySelector('#aniversario').value;
    const resultado = document.querySelector('#resultado');

    if (!input) {
        resultado.innerHTML = 'Insira uma data!';
        return;
    }

    const aniversario = new Date(input);

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    aniversario.setHours(0, 0, 0, 0);

    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth();

    const diaAniversario = aniversario.getDate();
    const mesAniversario = aniversario.getMonth();

    if (diaAtual === diaAniversario && mesAtual === mesAniversario) {
        resultado.innerHTML = ' Feliz aniversário! Hoje é seu dia!';
        return;
    }

    
    let proximoAniversario = new Date(
        hoje.getFullYear(),
        mesAniversario,
        diaAniversario
    );

    proximoAniversario.setHours(0, 0, 0, 0);

    if (proximoAniversario < hoje) {
        proximoAniversario.setFullYear(hoje.getFullYear() + 1);
    }

    const diferenca = proximoAniversario - hoje;

    const diasFaltando = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    resultado.innerHTML = ` Faltam ${diasFaltando} dias para o seu aniversário!`;
}

