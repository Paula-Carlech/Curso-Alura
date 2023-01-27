const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JASON.parse(localStorage("itens")) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome  = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(nome.value, quantidade.value);

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(itens){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = itens.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += itens.nome;

    lista.appendChild(novoItem);
}
