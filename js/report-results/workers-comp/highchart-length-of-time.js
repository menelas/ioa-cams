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
        },
        series: [{
            name: 'Claims Count',
            colorByPoint: true,
            data: [{
                name: '0-6 Months',
                y:4
            }, {
                name: '7-12 Months',
                y:4
            }, {
                name: '1-2 Years',
                y:5
            }, {
                name: '2-5 Years',
                y:9
            }, {
                name: '6+ Years',
                y:34,
                selected: false
            }]
        }]
    });
});