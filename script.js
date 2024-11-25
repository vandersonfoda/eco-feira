// Quando a página carregar, a função abaixo será executada
window.onload = function() {
    // Após 3 segundos, o overlay de introdução será removido
    setTimeout(function() {
        document.querySelector('.overlay').style.display = 'none';
    }, 3000); // Esconde o overlay após 3 segundos
};