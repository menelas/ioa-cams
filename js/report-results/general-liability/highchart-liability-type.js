var chart = Highcharts.chart('liability-type', {

    chart: {
        type: 'column'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
    },

    xAxis: {
        categories: ['Premise', 'Product'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    },

    series: [{
        name: 'Claims Count',
        data: [7, 9],
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
    }, {
        name: 'Claims with Injuries',
        data: [12, 5],
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
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

/*$(function () {
    Highcharts.chart('liability-type', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Premise',
                'Product',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Claims Count',
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
            name: 'Claims Count',
            data: [21,12]

        }]
    });
});*/