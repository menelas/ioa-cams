$(function () {
    Highcharts.chart('day-of-week', {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
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
                layout: 'vertical',
                pointPadding: 0.2,
                borderWidth: 0,
                floating: true,
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        legend:
        {
            enabled: true
        },
        series: [{
            name: 'Claims',
            data: [3,4,7,4,9,1,4]
        },{
            name: 'Claims',
            data: [5,1,8,3,7,4,8]
        }]
    });
});