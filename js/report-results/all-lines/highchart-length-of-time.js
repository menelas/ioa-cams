$(function () {
    Highcharts.chart('length-of-time', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
            '0-15 Days',
            '16-30 Days',
            '31-45 Days',
            '46-60 Days',
            '61-90 Days',
            '91-120 Days',
            '121+ Days',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Claims',
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
            name: 'Claims',
            data: [4,4,5,9,12,13,34]
        }]
    });
});