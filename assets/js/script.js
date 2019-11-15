$(document).on('ready', function () {
    const slider = tns({
        container: '.my-slider',
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        arrowKeys: true,
        autoplayButtonOutput: false
    });

    const testimonialSlider = tns({
        container: '.testimonial-slider-sm',
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        arrowKeys: true,
        autoplayButtonOutput: false
    });

    $('.btn-prev').on('click', function (e) {
        slider.goTo('prev');
    });

    $('.btn-next').on('click', function (e) {
        slider.goTo('next');
    });

    $('.menu').on('click', function (e) {
        const nav = $('.academy-nav-sm');
        if (nav.hasClass('d-none')) {
            nav.removeClass("d-none");
            nav.addClass("d-flex");
        } else {
            nav.removeClass("d-flex");
            nav.addClass("d-none");
        }
    });

    $('.close').on('click', function (e) {
        const nav = $('.academy-nav-sm');
        nav.removeClass("d-flex");
        nav.addClass("d-none");
    });
});