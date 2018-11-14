	(function($) {
		$('.select-all1').click(function(){
			if($(this).is(':checked') ){
				$('.select-all1-child').prop( "checked", true );
			}else{
				$('.select-all1-child').prop( "checked", false );
			}
		});
		$('.select-all2').click(function(){
			if($(this).is(':checked') ){
				$('.select-all2-child').prop( "checked", true );
			}else{
				$('.select-all2-child').prop( "checked", false );
			}
		});
	})(jQuery);