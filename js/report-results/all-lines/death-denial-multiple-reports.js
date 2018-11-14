Highcharts.chart('death-denial-multiple-reports', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: ''
    },
    series: [{
        name: 'Population',
        data: [
            ['Death/Fatality', 24],
            ['Non-Death/Fatality', 20],
            ['Denial', 14],
            ['Non-Denial', 13],
            ['Litigation', 13],
            ['Non-Litigation', 12],
            ['Report Only', 12],
            ['Non-Report', 12],
            ['Subrogation', 12],
            ['Non-Subrogation', 11]
        ],
        dataLabels: {
            enabled: true,
            inside: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',
            verticalAlign: 'middle',
            format: '{point.y}', // one decimal
            style: {
            }
        }
    }]
});