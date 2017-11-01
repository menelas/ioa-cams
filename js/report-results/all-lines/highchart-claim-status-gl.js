$(function () {
    Highcharts.chart('claim-status-gl', {
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
                name: 'Open',
                y:56
            }, {
                name: 'Closed',
                y:24
            }, {
                name: 'Pending',
                y:50,
                selected: false
            }]
        }]
    });
});