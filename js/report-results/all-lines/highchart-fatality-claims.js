$(function () {
    Highcharts.chart('fatality-claims', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Death/Fatality',
                'Non-Death/Fatality'
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
            data: [32,54]

        }]
    });
});