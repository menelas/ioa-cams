Highcharts.chart('location', {
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
            text: 'Number of Claims'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} claims</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                inside: true,
            }
        }
    },
    series: [{
        name: 'Company A',
        data: [11, 1, 6, 2, 4, 5, 9, 10, 11, 10]

    }, {
        name: 'Company B',
        data: [4, 3, 14, 9, 5, 4, 3, 1, 19, 8]

    }]
});