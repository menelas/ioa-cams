Highcharts.chart('time-of-day', {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
        '0100',
        '0200',
        '0300',
        '0400',
        '0500',
        '0600',
        '0700',
        '0800',
        '0900',
        '1000',
        '1100',
        '1200',
        '1300',
        '1400',
        '1500',
        '1600',
        '1700',
        '1800',
        '1900',
        '2000',
        '2100',
        '2200',
        '2300',
        '2400',
        ]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: '# of Claims',
        data: [15,10,14,11,20,40,11,17,14,11,4,3,12,4,18,10,24,10,19,19,19,10,4,1]
    }]
});