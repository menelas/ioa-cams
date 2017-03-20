 $(document).ready(function(){
       <!-- Enable portlets -->
      WinMove();

        var heights = $(".body-container .drag-enable:not(.highchar)").map(function ()
        {
          return $(this).height();
        }).get();

        var maxHeight = Math.max.apply(null, heights);
        $(".body-container .drag-enable:not(.highchar)").css({"height": maxHeight+"px"});
          
        //$(".highchar .panel.tablecontainer").css({"height": (maxHeight-30)+"px"});
    });

		
		function WinMove() {
			var element = "[class*=drag-enable]";
			var handle = ".tableheader";
			var connect = "[class*=drag-enable]";
			$('div.body-container').sortable(
				{
				
				items       : element,
				placeholder : 'sortable-placeholder',
				change: function( event, ui ) {
					if($(ui.item).hasClass("full-size-panel")) {
						content = $(ui.placeholder);
						index = $("div.body-container .drag-enable").index(content);
						if((ui.originalPosition.top-ui.offset.top)>=0) // drag to up
						{
							$("div.body-container .drag-enable:not(.full-size-panel)").eq(Math.floor(index/3)*3).before(content);
						}
						else {
							$("div.body-container .drag-enable:not(.full-size-panel)").eq(Math.floor(index/3)*3+2).after(content);
						}
					}
					$(ui.placeholder).addClass(ui.item.attr("class")).addClass("panel").css({"height": (ui.item.height()-20)+"px"});
				},
				stop: function( event, ui ) {
					if($(ui.item).hasClass("full-size-panel")) {
						content = $(ui.item);
						index = $("div.body-container .drag-enable").index(content);
						if((ui.originalPosition.top-ui.offset.top)>=0) // drag to up
						{
							$("div.body-container .drag-enable:not(.full-size-panel)").eq(Math.floor(index/3)*3).before(content);
						}
						else {
							$("div.body-container .drag-enable:not(.full-size-panel)").eq(Math.floor(index/3)*3+2).after(content);
						}
					}
          $("#highchar-charts").highcharts().setSize(null, null);
				},
					<!-- handle: handle, -->
					<!-- connectWith: connect, -->
					<!-- tolerance: 'pointer', -->
					<!-- forcePlaceholderSize: false, -->
					<!-- opacity: 0.8 -->
				})
				.disableSelection();
		}