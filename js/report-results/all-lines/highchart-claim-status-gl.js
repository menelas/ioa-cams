$(function () {
    Highcharts.chart('claim-status-gl', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Open',
                'Closed',
                'Draft',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Claims',
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
            name: 'Claims',
            data: [56,50,24]

        }]
    });
});