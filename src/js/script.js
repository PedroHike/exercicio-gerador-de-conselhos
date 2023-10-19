const id = document.getElementById('id');
const conteudo = document.getElementById('conteudo');
const botao = document.getElementById('btn');

botao.addEventListener('click', ()=>{
    trocarID();
    trocarConteudo();
    
})

async function buscarConselhosAleatorios(){
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    const json = await resposta.json();
    
    return await json.slip
}

async function selecionarID(){
    const conselho = await buscarConselhosAleatorios();
    return conselho.id;
}

async function trocarID(){
    const idAtualizado = await selecionarID();
    id.innerHTML = idAtualizado
}

async function selecionarConteudoConselho(){
    const conselho = await buscarConselhosAleatorios();
    return conselho.advice
}

async function trocarConteudo(){
    const conteudoAtualizado = await selecionarConteudoConselho();
    conteudo.innerHTML = conteudoAtualizado
}
