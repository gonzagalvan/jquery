
$(document).ready(function() {
    $('#boton1').click(function() {
        $('#imagen').hide();
        $('.titulo').text("¡No tenemos ninguna imagen!");
    });
    $('#boton2').click(function() {
       $('#imagen').show();
       $('.titulo').text("¡Mirá la siguiente imagen!");
    })
});
