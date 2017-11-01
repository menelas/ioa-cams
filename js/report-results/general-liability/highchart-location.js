$(function () {
    Highcharts.chart('claim-locations', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['June 2017', 'July 2017', 'August 2017', 'September 2017', 'October 2017', 'November 2017',],
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
            data: [17,12,9,6,3,2]

        }]
    });
});