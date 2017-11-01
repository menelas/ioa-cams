$(function () {
    Highcharts.chart('time-of-year', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['June 2017', 'July 2017', 'August 2017', 'September 2017', 'October 2017', 'November 2017',],
        },
        yAxis: {
            title: {
                text: ''
            }

        },

        legend: {
            enabled: false
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

        series: [{
            name: 'Claims',
            data: [{
                name: '2013',
                y: 560,
             }, {
                name: '2014',
                y: 243,
             }, {
                name: '2015',
                y: 103,
             }, {
                name: '2016',
                y: 477,
             }, {
                name: '2017',
                y: 152,
             }]
        }],
         
    });
});