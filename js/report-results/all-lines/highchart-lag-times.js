Highcharts.chart('lag-times', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    xAxis: {
        categories: ['Date of Incident to <br /> Date Submitted to Carrier', 'Date of Incident to <br /> Date Employer Notified', 'Date Employer Notified to <br />Date Submitted to Carrier']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<strong>{point.y}</strong>',
        pointFormat: '<strong> Days</strong>'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Date of Incident to Date Submitted to Carrier',
        data: [5, 3, 4]
    }, {
        name: 'Date of Incident to Date Employer Notified',
        data: [2, 2, 3]
    }, {
        name: 'Date Employer Notified to Date Submitted to Carrier',
        data: [3, 4, 4]
    }]
});