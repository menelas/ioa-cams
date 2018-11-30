$(function () {
    Highcharts.chart('body-part-injury', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Ankle/Foot',
                'Arm',
                'Back',
                'Elbow',
                'Finger',
                'Great Toe',
                'Groin',
                'Hand',
                'Head',
                'Head eye',
                'Knee',
                'Leg',
                'Neck',
                'Other',
                'Wrist',
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
            data: [3,4,7,4,9,1,3,5,1,3,4,2]

        }]
    });
});