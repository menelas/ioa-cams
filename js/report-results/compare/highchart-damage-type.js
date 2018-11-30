Highcharts.chart('damage-type', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Hail',
            'Fire',
            'Flood',
            'Lightning',
            'Theft',
            'Wind',
            'Other'
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
            '<td style="padding:0">Claims: <b>{point.y}</b></td></tr>',
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
        data: [0, 12, 16, 29, 44, 21, 10]

    }, {
        name: 'Company B',
        data: [42, 13, 14, 19, 5, 12, 11]

    }]
});