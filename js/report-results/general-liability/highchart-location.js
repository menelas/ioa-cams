$(function () {
    Highcharts.chart('claim-locations', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Longwood, FL', 'Ormond Beach, FL', 'Jacksonille, FL', 'Fernandina Beach, FL', 'Tampa, FL', 'Ft. Myers, FL',],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Locations',
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
            name: 'Locations',
            data: [17,12,9,6,3,2]

        }]
    });
});