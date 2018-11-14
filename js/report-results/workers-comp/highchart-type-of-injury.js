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
                'Hearing Loss $10,000',
                'Injury $12,000',
                'Poisoning $6,500',
                'Respiratory Condition $4,500',
                'Skin Disorder $1,000',
                'All other illnesses $3,500',
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
            data: [6,5,12,11,10,10]

        }]
    });
});