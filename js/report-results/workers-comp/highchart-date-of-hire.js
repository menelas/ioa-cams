$(function () {
    Highcharts.chart('date-of-hire', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'January 2017',
                'February 2017',
                'March 2017',
                'April 2017',
                'May 2017',
                'June 2017',
                'July 2017',
                'August 2017',
                'September 2017',
                'October 2017',
                'November 2017',
                'December 2017',
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
            data: [7,12,11,10,5,19,5,10,11,14,6,9]

        }]
    });
});