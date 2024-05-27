//FUNÇÃO APARA ATIVAR BOTÃO CLICADO
// Função que adiciona as classes 'active-btn' e 'btn' ao item de lista clicado
function handleItemClick(event) {
    // Verifica se o clique foi em um <li> ou um dos seus filhos
    let listItem = event.target.closest('li');
    if (!listItem) return; // Se não foi em um <li> ou um dos seus filhos, sai da função

    // Seleciona o item atualmente ativo e remove as classes 'active-btn' e 'btn'
    const currentActive = document.querySelector('li.active-btn');
    if (currentActive && currentActive !== listItem) {
        currentActive.classList.remove('active-btn');
        currentActive.querySelectorAll('i, a').forEach(child => {
            child.classList.remove('btn');
        });
    }

    // Adiciona as classes 'active-btn' e 'btn' ao item de lista clicado
    listItem.classList.add('active-btn');
    listItem.querySelectorAll('i, a').forEach(child => {
        child.classList.add('btn');
    });
}

// Adiciona o evento de clique a todos os itens de lista dentro do elemento com a classe 'items'
document.querySelectorAll('.items li').forEach(item => {
    item.addEventListener('click', handleItemClick);
});
