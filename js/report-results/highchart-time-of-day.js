$(function () {
    Highcharts.chart('time-of-day', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                '0.00',
                '3:00',
                '4:00',
                '8:00',
                '9:00',
                '11:00',
                '12:00',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Claims Count',
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
            name: 'Claims Count',
            data: [3,4,7,4,9,1]

        }]
    });
});