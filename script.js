$(function() {
    //Clonar o elemento dentro da box container
    var el = $('#sourcer .texto').clone();
   // $('#container').html(el.html());

    //clonar com appendTo

    //el.appendTo('#container');

    //Mover o elemento para dentro da box

    $('#sourcer .texto').appendTo('#container');
});