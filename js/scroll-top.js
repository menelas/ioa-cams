(function($) {
    $.fn.checkBackToTop = function() {
        $('.pull-right .nav-pills li a').click(function() { //call function base on click event
            if ($(window).outerWidth() >= 767) { //check for desktop
                if ($(window).scrollTop() > 82) { //when the current scroll bar height is greater than 82, 82 is the height that the claim-details div is hidden when scroll
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500); //scroll to top in 500ms
                    return true; //callback
                }
            } else { //for mobile device
                $('html, body').animate({
                    scrollTop: $(".claim-details").offset().top - 60
                }, 1000); //get position of .clain-detail  from top, 60 is a height to visible the content of .claim-detail from top.
                return true; //callback
            }
        });
    }
    $.fn.checkBackToTop(); //make checkBackToTop ready when document is ready  
    $(window).on('resize', function() {
        $.fn.checkBackToTop(); //make checkBackToTop ready when window is resized
    });
})(jQuery);