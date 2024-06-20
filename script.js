
$(document).ready(function() {
    $('#boton1').click(function() {
        $('#imagen').hide();
        $('.text-primary').text("¡No tenemos ninguna imagen!");
    });
    $('#boton2').click(function() {
       $('#imagen').show();
       $('.text-primary').text("¡Mirá la siguiente imagen!");
    })
});
