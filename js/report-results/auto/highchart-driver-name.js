$(function () {
    Highcharts.chart('driver-names', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
            'Carroll Dotson',
            'Francis Berry',
            'Edwin Pitman',
            'David Wootson',
            'Brian Smith',
            'Robert King',
            'Jeff Curtis',
            'Amanda Willams',
            'Shannon Gordon',
            'Emily Lee',
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
            data: [56,50,24,12,30,16,8,19,12,11]
        }]
    });
});