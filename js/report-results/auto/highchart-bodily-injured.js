$(function () {
    Highcharts.chart('bodily-injured', {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Injured',
                'Non-Injured'
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
            bar: {
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
            data: [32,54]

        }]
    });
});