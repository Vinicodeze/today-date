const data = new Date();
const p = document.querySelector('.container p');

const opcoes ={
    timeStyle: 'short',
    dateStyle: 'full'
}

const formatoBr = data.toLocaleString('pt-BR', opcoes);
p.innerHTML = formatoBr;