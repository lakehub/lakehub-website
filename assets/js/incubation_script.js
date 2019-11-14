$(document).on('ready', function () {

    $('.incubation-menu').on('click', function (e) {
        const nav = $('.academy-nav-sm');
        nav.removeClass("d-none");
        nav.addClass("d-flex");
    });

    /*$('.close').on('click', function (e) {
        const nav = $('.academy-nav-sm');
        nav.removeClass("d-flex");
        nav.addClass("d-none");
    });*/
});