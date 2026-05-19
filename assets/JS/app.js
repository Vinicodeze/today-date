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

    const [anoInput, mesInput, diaInput] = input.split('-');

    const aniversario = new Date(anoInput, mesInput -1, diaInput);
    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);
    aniversario.setHours(0, 0, 0, 0);

    const diaHoje = hoje.getDate();
    const mesHoje = hoje.getMonth();

    const diaAniv = aniversario.getDate();
    const mesAniv = aniversario.getMonth();

    if (diaHoje === diaAniv && mesHoje === mesAniv) {
        resultado.innerHTML = " Feliz aniversário! Hoje é seu dia!";
        return;
    }

   
    let proximo = new Date(
        hoje.getFullYear(),
        mesAniv,
        diaAniv
    );

    if (proximo < hoje) {
        proximo.setFullYear(hoje.getFullYear() + 1);
    }

    const diferenca = proximo - hoje;

    const diasFaltando = Math.round(diferenca /(1000 * 60 * 60 * 24));

    resultado.innerHTML = ` Faltam ${diasFaltando} dias para seu aniversário!`;
}

