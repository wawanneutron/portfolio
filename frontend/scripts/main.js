// make projact portfolio Neutron Blog
// when in the scroll, appears icon scroll to top
$(window).scroll(function () {
    var totalHeight = $(window).scrollTop();
    if (totalHeight > 400) {
        $(".scrolltotop").fadeIn();
    } else {
        $(".scrolltotop").fadeOut();
    }
});

//process scroll
$('a.scrolltotop').on('click', function (event) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 350);
});

// make navbar collapse when in scroll to down lost
(function () {
    var documentElem = $(document),
        nav = $('.navbar-custom'),
        lastScrollTop = 0;

    documentElem.on('scroll', function () {
        var currentScrollTop = $(this).scrollTop();

        // scroll down
        if (currentScrollTop > lastScrollTop) nav.addClass('hidden');

        // scrollTop
        else nav.removeClass('hidden');
        lastScrollTop = currentScrollTop;
    });

})();

// preloader
$(document).ready(function () {
    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 2000)

});

// animation when in open the web
$(window).on('load', function () {
    setTimeout(function () {
        $('.text-header').addClass('come-up');
        $('.btn-cte').addClass('come-up');
    }, 2100);

    setTimeout(function () {
        $('.btn-cte').addClass('come-up');
    }, 2400);
});