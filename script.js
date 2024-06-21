// script.js

document.addEventListener('DOMContentLoaded', function() {
    const produtos = ['Trigo', 'Milho', 'Legumes diversos'];

    const listaProdutos = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
        const itemLista = document.createElement('li');
        itemLista.textContent = produto;
        listaProdutos.appendChild(itemLista);
    });
});
