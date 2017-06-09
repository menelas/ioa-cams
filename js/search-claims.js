(function($) {
	$('.parent-child-main-table.cf .parent-child-main td:first-child i.show2').click(function(){
		$(this).hide();
		$(this).siblings('i.shide').show();
		var inm = $(this).attr('p-child');
		$('.parent-child[drop-name='+inm+']').addClass('parent-child-show');
		
	});
	$('.parent-child-main-table.cf .parent-child-main td:first-child i.shide').click(function(){
		$(this).hide();
		$(this).siblings('i.show2').show();
		var inm = $(this).attr('p-child');
		$('.parent-child[drop-name='+inm+']').removeClass('parent-child-show');
		
	});
})(jQuery);