$(function() {
    $(".chart-block .value").each(function(){
        var chartVal = $(this).attr("data-value");
        var charMax = $(this).attr("data-max");
        $(this).html(chartVal);
        var charPercent = ( parseInt(chartVal)/parseInt(charMax) )*100;
        $(this).parent().siblings(".chart-bar").append("<div class='chart-bar-progress'></div>").show();
        $(this).parent().siblings(".chart-bar").children(".chart-bar-progress").css({"width":charPercent+"%"}).show();
    });
});