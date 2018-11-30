Highcharts.chart('policy-year-claims-compare', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
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
        name: 'Auto',
        data: [110, 500, 420, 780, 400]

    }, {
        name: 'General Liability',
        data: [400, 330, 840, 490, 502]

    }]
});