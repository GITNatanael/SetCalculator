//Declaracion de Variables
const btnHorizontal = document.querySelector('.View-option-Horizontal');
const btnVertical = document.querySelector('.View-option-Vertical');

//JQuery Al hacer clic en una .Card-result, esta aumenta de tamaño o se deselecciona
$(document).ready(function() {
  $('.Card-result').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.Content-card-result').removeClass('active-content'); //Incluye el .Content-card-result
    } else {
      $('.Card-result').removeClass('active');
      $('.Content-card-result').removeClass('active-content');
      $(this).addClass('active');
      $(this).find('.Content-card-result').addClass('active-content');
    }
  });
});

//Vizualizacion del contenido del .Card-result seleccionado en el elemento #vizualizador
const visualizador = $('#Visualizador');
$('.Card-result').on('click', function() {
  // Obtener el contenido del Content-card-result del elemento clickeado
  const contentCardResult = $(this).find('.Content-card-result').html();
  // Agregar el contenido al visualizador
  visualizador.html(contentCardResult);
});


 //Desvanecer Horizontal
 $(document).ready(function() {
  $('.View-option-Vertical').click(function() {
    $('.Container-results.Horizontal').fadeOut(500, function() {
      $(this).css('display', 'none');
      $('.Container-Grid').fadeIn(500, function() {
        $(this).css('display', 'grid');
      });
    });
  });
});
 //Desvanecer Vertical
$(document).ready(function() {
  $('.View-option-Horizontal').click(function() {
    $('.Container-Grid').fadeOut(500, function() {
      $(this).css('display', 'none');
      $('.Container-results.Horizontal').fadeIn(500, function() {
        $(this).css('display', 'grid');
      });
    });
  });
});