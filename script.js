
$(document).ready(function() {
    $('#boton1').click(function() {
        $('#imagen').hide();
        $('.h1').text("¡No tenemos ninguna imagen!");
    });
    $('#boton2').click(function() {
       $('#imagen').show();
       $('.h1').text("¡Mirá la siguiente imagen!");
    })
});
