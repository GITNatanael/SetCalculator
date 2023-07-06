$(document).ready(function () {
    $('.copy-button').hover(
        function () {
            var card = $(this).closest('.Tarjeta');
            var copyText = card.find('.copy-text');
            copyText.addClass('show');
        },
        function () {
            var card = $(this).closest('.Tarjeta');
            var copyText = card.find('.copy-text');
            copyText.removeClass('show');
        }
    );

    $('.copy-button').click(function () {
        var card = $(this).closest('.Tarjeta');
        var contentToCopy = card.find('.output-operations').text().trim();

        // Crea un elemento de textarea temporal y coloca el contenido a copiar en él
        var tempTextarea = $('<textarea>');
        tempTextarea.val(contentToCopy);
        $('body').append(tempTextarea);

        // Selecciona y copia el contenido del textarea
        tempTextarea.select();
        document.execCommand('copy');

        // Elimina el textarea temporal
        tempTextarea.remove();

        // Desactivar el evento hover en .copy-button
        $('.copy-button').off('mouseenter mouseleave');

        // Actualiza el texto al copiado y muestra por 5 segundos
        var copiedText = card.find('.copied-text');
        var copyText = card.find('.copy-text');
        copiedText.addClass('show');
        copyText.removeClass('show');
        setTimeout(function () {
            copiedText.removeClass('show');
            // Reactivar el evento hover en .copy-button
            $('.copy-button').hover(
                function () {
                    var card = $(this).closest('.Tarjeta');
                    var copyText = card.find('.copy-text');
                    copyText.addClass('show');
                },
                function () {
                    var card = $(this).closest('.Tarjeta');
                    var copyText = card.find('.copy-text');
                    copyText.removeClass('show');
                }
            );
        }, 5000);

    });
});
