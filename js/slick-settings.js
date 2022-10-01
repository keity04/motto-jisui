jQuery(function ($) {
    $(document).ready(function () {
        $('.tools-slider').slick({
            autoplay: false,
            dots: true,
            arrows: false,
            slideToScroll: 1,
            infintie: false,
            centerMode: true,
            centerPadding: '25%',
        });

        $('.open').modaal({
            content_source: '#open'
        });

        // $('.make-slider').slick({
        //     autoplay: false,
        //     dots: true,
        //     arrows: false,
        //     slideToScroll: 1,
        //     infintie: false,
        //     centerMode: true,
        //     centerPadding: '0%',
        // });
    });
});

