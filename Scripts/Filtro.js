//Funcion para filtrar visualizacion de Resultados
$(document).ready(function() {
  $('.Element').on('click', function() {
    var target = $(this).data('target');
    var filtro = $('.Resultados-Grid-Inferior-FILTRO');
    //var tarjeta = filtro.find('#' + target + '.Tarjeta');
    var tarjeta = filtro.find(`#${target}.Tarjeta`); //Mas limpio
    var resultadosGridInferior = $('.Resultados-Grid-Inferior');

    resultadosGridInferior.addClass('hidden');

    if (!tarjeta.hasClass('hidden')) {
      tarjeta.addClass('hidden');
      $(this).removeClass('active');
    } else {
      tarjeta.removeClass('hidden');
      $(this).addClass('active');
    }
    if ($('.Element.active').length === 0) {
      resultadosGridInferior.removeClass('hidden'); //Visualiza todos los Resultados cuando ya no hay botones activos
    }
  });
});
