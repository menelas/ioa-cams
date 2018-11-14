$(function () {
    $(".btn-graph-version").on("click", function(){
        var dataGraph = $(this).attr("data-graph");
        $('#death-denial-multiple-reports').highcharts().reflow();
        $(".data-graph-version").hide();
        $("#"+dataGraph).show();
    });

    $(".btn-graph-version2").on("click", function(){
        var dataGraph = $(this).attr("data-graph");
        $(".data-graph-version2").hide();
        $("#"+dataGraph).show();
    });

    $(".chart-data .back-btn").on("click", function(){
        $(".chart-data").hide();
        $("#graph-version2-2").show();
    });
    $(".claimant-data .back-btn").on("click", function(){
        $(".claimant-data").hide();
        $("#graph-version2-2").show();
    });

});