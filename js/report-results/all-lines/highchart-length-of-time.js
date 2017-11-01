$(function () {
    Highcharts.chart('length-of-time', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
            tooltip: {
                formatter: function () {
                    return '<span style="color:' + this.point.color + '">\u25CF</span> ' + this.series.name + ' ' + ':' + '<strong>' + this.y + '</strong>';//custom name
                }
            },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.0f} ',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },//(0-15 days, 16-30 days, 31-45 days, 46-60 days, 61-90 days, 91-120 days, 121 days or more)
        series: [{
            name: 'Claims Count',
            colorByPoint: true,
            data: [{
                name: '0-15 Days',
                y:4
            }, {
                name: '16-30 Days',
                y:4
            }, {
                name: '31-45 Days',
                y:5
            }, {
                name: '46-60 Days',
                y:9
            }, {
                name: '61-90 Days',
                y:12
            }, {
                name: '91-120 Days',
                y:13
            }, {
                name: '121+ Days',
                y:34,
                selected: false
            }]
        }]
    });
});