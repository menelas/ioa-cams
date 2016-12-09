(function($) {
	$(window.parent).scroll(function(){
		$.fn.checkNavigationToFix();
	});
	$('#claim-information-container #summary #summarysub').scroll(function(){
			$.fn.checkNavigationToFix();
	});
	$.fn.checkNavigationToFix = function(){ 
			var ntt = $('#claim-information-container').offset().top;
			var smsubw = $('#claim-information-container #summary #summarysub').width();
			smsubw = smsubw-16;
			var stt = $(window.parent).scrollTop();
			if($(window).outerWidth() < 768){//check for desktop
				var hold = $('#claim-information-container div ul.tabs-left').height();
				ntt = ntt+5-stt+hold;
			}else{
				ntt = ntt+5-stt;
			}
			var navh = $('#claim-information-container #summary #summarysub ul').height();
			$('#claim-information-container #summary #summarysub ul').css({"position":"fixed","top":ntt,"background":"#ffffff","z-index":99,"width":smsubw});
			$('#claim-information-container #summary #summarysub h4:first').css({"margin-top":navh+9});
    }
	$.fn.checkNavigationToFix();//make checkNavigationToFix ready when document is ready 
	$('#claim-information-container #summary #summarysub ul li a').click(function(e){//call function base on click event
		$(this).closest("li").siblings().removeClass('active');
		$(this).closest("li").addClass('active');
        var aid = $(this).attr('href');
        var hold = $('#claim-information-container #summary #summarysub ul').height();

        $('#claim-information-container #summary #summarysub').animate({
            scrollTop: $(aid).parent().scrollTop() + $(aid).offset().top - $(aid).parent().offset().top - hold
        }, {
            duration: 1000,
            specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
            }
        });
        e.preventDefault();
    });
    $.fn.checkClainInformationFit = function() {
        var hh = $("html").height();
        var wh = $(window).height();
        var cioff = $('#claim-information-container').offset().top; 
        if (wh > hh) {
            $("html").height(wh);
            $('#summary').height(wh - cioff);
            $('#summarysub').height(wh - cioff);
        }
    }
	$('#claim-summary-container ul.nav-pills li a[target]').click(function(e){//call function base on click event
		var aid = $(this).attr('target');
		var animateFunction = function(duration) {
			var titleHeight = $(".sub-section").outerHeight() + 10;
			var top = $(aid).closest("#claim-summary").scrollTop() + $(aid).offset().top - $(aid).closest("#claim-summary").offset().top - titleHeight;
			if (aid == "#claim-summary") {
				top = 0;
			}

			$('#claim-summary-container #claim-summary').animate({
				scrollTop: top
			}, {
				duration: duration || 100,
				specialEasing: {
					width: 'linear',
					height: 'easeOutBounce'
				}
			});
		};

		if (aid && $('.tab-pane#forms').hasClass("active")) {
			$('a[href="#claim-summary"]').tab('show');
			$('a[href="#claim-summary"]').one('shown.bs.tab', function(event){
				animateFunction();
			});
		} else {
			animateFunction(1000);
		}			
		e.preventDefault();
	});
	$(window).on('resize', function(){
		$.fn.checkNavigationToFix(); //make checkNavigationToFix ready when window resizes
	});
})(jQuery);