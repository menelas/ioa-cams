Highcharts.chart('time-of-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'January $10,000',
            'February $12,000',
            'March $8,500',
            'April $5,000',
            'May $4,500',
            'June $5,200',
            'July $8,400',
            'August $3,500',
            'September $6,500',
            'October $7,500',
            'November $3,500',
            'December $1,500',
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
        name: 'Open Claims',
        data: [11, 1, 6, 2, 4, 5, 9, 10, 11, 10, 9, 12]

    }, {
        name: 'Closed Claims',
        data: [4, 3, 14, 9, 5, 4, 3, 1, 19, 8, 5, 1]

    }]
});