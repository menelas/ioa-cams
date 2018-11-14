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
            'Cocoa, FL',
            'Fernandina, FL',
            'Fort Lauderdale, FL',
            'Jacksonville, FL',
            'Jupiter, FL',
            'Longwood, FL',
            'Miami, FL',
            'Ormond Beach, FL',
            'Tampa, Fl',
            'Tallahassee, FL'
        ],
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
            data: [17,12,9,6,3,2,8,3,1,2]

        }]
    });
});