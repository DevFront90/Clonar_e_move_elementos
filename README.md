Clonar e Mover Elementos com jQuery
Este projeto demonstra como clonar e mover elementos DOM usando jQuery de forma prática e eficiente.
Como Clonar Elementos
O método clone() do jQuery cria uma cópia completa de um elemento, incluindo todos os seus atributos e conteúdo interno:
javascriptvar elemento = $('#meuElemento').clone();
A clonagem é útil quando você precisa duplicar elementos sem afetar o original, mantendo toda a estrutura HTML e CSS aplicada.
Como Mover Elementos
Para mover elementos entre diferentes containers, utilizamos métodos como appendTo(), prependTo(), ou insertAfter():
javascript$('#elementoOrigem').appendTo('#novoContainer');
Diferente da clonagem, mover um elemento remove ele de sua posição atual e o coloca no novo local especificado.
Exemplo Prático
javascript$(function() {
    // Clonar o elemento
    var elementoClonado = $('#sourcer .texto').clone();
    
    // Inserir apenas o conteúdo HTML interno
    $('#container').html(elementoClonado.html());
    
    // Adicionar o elemento clonado completo
    elementoClonado.appendTo('#container');
    
    // Mover o elemento original
    $('#sourcer .texto').appendTo('#container');
});
Este código demonstra três operações distintas: extrair conteúdo HTML, adicionar elementos clonados e mover elementos originais, oferecendo flexibilidade total na manipulação da estrutura da página.
