$(function () {
    Highcharts.chart('locations', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Alabama',
                'Arizona',
                'California',
                'Florida',
                'Georgia',
                'New Jersey',
                'New York',
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