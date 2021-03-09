$(document).ready(function () 
{
    /*
    Abre o modal após 10 segundos do carregamento da página
    */
    setTimeout(function () {
        let whatsapp = $('.js-whatsapp');

        if (whatsapp.is(':hidden')) {
            $('.js-whatsapp-open').trigger('click');
        }
    }, 10000);

    /*
    Exibe ou Oculta a janela Modal 
    Toggle
    */
    $('html').on('click', '.js-whatsapp-open', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let whatsapp = $('.js-whatsapp');

        if (whatsapp.is(':hidden')) {
            $(".js-whatsapp-open i").removeClass("fab fa-whatsapp").addClass("fas fa-times");
            $(".js-whatsapp-open .whatsapp__hidden").html("Fechar");
        } else {
            $(".js-whatsapp-open i").removeClass("fas fa-times").addClass("fab fa-whatsapp");
            $(".js-whatsapp-open .whatsapp__hidden").html("WhatsApp");
        }

        whatsapp.slideToggle('fast');
    });


    /*
    Scroll
    */
    $('.js-whatsapp').on('scroll', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let whatsapp = $(this);
        let scroll = whatsapp.scrollTop();
        let opacity = $('.js-whatsapp-opacity');

        if (scroll) {
            opacity.addClass('is-scroll');
        } else {
            opacity.removeClass('is-scroll');
        }
    });

});