$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
	} else {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
	}
});