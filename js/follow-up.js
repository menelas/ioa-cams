(function($) {
	$('#follow-up').on('change', function(){
		if( $('#follow-up').is(":checked") ){
			$('#journal-entry').modal('show');
		}
	});
})(jQuery);