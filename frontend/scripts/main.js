//ketika di scroll muncul icon scroll ke atas
$(window).scroll(function () {
    var totalHeight = $(window).scrollTop();
    if (totalHeight > 350) {
        $(".scrolltotop").fadeIn();
    } else {
        $(".scrolltotop").fadeOut();
    }
});

//proses scroll
$('a.scrolltotop').on('click', function (event) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 300);
});