$(function () {
    Highcharts.chart('type-of-injury', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Arm',
                'Burn',
                'Concussion',
                'Elbow',
                'Fall',
                'Foreign Object',
                'Fracture',
                'Other',
                'Sprain',
                'Strain',
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
            data: [3,4,7,4,9,1,3,2,3]

        }]
    });
});