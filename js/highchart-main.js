$(function () {
    // Create the chart
    Highcharts.chart('highchart-charts', {
        colors: ['#687c82', '#e87969', '#5c5c5c', '#78b9c8', '#1b4367'],
        chart: {
            type: 'column'
        },
        title: {
            text: 'DISPLAYING ALL CLAIMS FROM 2013 TO 2017'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2013', '2014', '2015', '2016', '2017']

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
            series: {
                borderWidth: 0,
                stacking: 'normal',
                dataLabels: {
                    enabled: false, 
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        },

        series: [{
            name: 'Claims',
            colorByPoint: true,
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