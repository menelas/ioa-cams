$(function () {
    Highcharts.chart('job-title', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Accountant',
                'Assistant Librarian',
                'Building Technician',
                'Cashier',
                'Driver',
                'Laborer',
                'Marketing Manager',
                'Nurse',
                'Project Manager',
                'Quality Assurance',

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
            data: [7,12,11,10,5,19,5,10,11,14]

        }]
    });
});