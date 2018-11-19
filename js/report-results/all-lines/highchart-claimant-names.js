$(function () {
    var chart = Highcharts.chart('claimant-names', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
            '2-3 claims',
            '4-5 claims',
            '6-7 claims',
            '8+ claims'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Claimants',
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        legend:
        {
            enabled: false
        },
        series: [{
            name: 'Claimants',
            data: [
                {
                    y:4,
                    className: "chart-data1" },
                {
                    y:4,
                    className: "chart-data2" },
                {
                    y:5,
                    className: "chart-data3" },
                {
                    y:6,
                    className: "chart-data4"
                }
            ],
            cursor: 'pointer',
            point: {
                events: {
                    click: function() {
                        $(".chart-data").hide();
                        $("#graph-version2-2").hide();
                        $("#"+this.className).show();
                    }
                }
            }
        }]
    });
    chart.xAxis[0].labelGroup.element.childNodes.forEach(function(label)
    {
        label.style.cursor = "pointer";
        label.onclick = function(){
            var txtCon = this.textContent;
            txtCon = txtCon.replace(" ", "");
            txtCon = txtCon.replace("+", "");
            $(".claimant-data").hide();
            $("#graph-version2-2").hide();
            $("#"+txtCon).show();
        }
    });
});