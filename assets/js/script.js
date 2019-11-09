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

    $('.btn-prev').on('click', function (e) {
        slider.goTo('prev');
    });

    $('.btn-next').on('click', function (e) {
        slider.goTo('next');
    })
});