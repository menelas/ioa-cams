(function($) {
    $.fn.checkBackToTop = function() {
        $('.pull-right .nav-pills li a').click(function() {

            if ($(window).outerWidth() >= 767) {
                if ($(window).scrollTop() > 82) {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                    return true;
                }
            } else {
                $('html, body').animate({
                    scrollTop: $(".claim-details").offset().top - 60
                }, 1000);
                return true;
            }
        });
    }
    $.fn.checkBackToTop();
    $(window).on('resize', function() {
        $.fn.checkBackToTop();
    });
})(jQuery);