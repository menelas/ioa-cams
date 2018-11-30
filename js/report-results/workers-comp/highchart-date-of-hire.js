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
                'December<br>2017',
                'January<br>2018',
                'February<br>2018',
                'March<br>2018',
                'April<br>2018',
                'May<br>2018',
                'June<br>2018',
                'July<br>2018',
                'August<br>2018',
                'September<br>2018',
                'October<br>2018',
                'November<br>2018',
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
            data: [7,12,11,10,5,19,5,10,11,14,6,9]

        }]
    });
});