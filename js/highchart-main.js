$(function()
{
    Highcharts.chart('highchar-charts',
    {
        chart: {
            type: 'column'
        },
        title:
        {
            text: ''
        },
        xAxis:
        {
            categories: ['Dec \'15', 'Jan \'16', 'Feb \'16', 'Mar \'16', 'Apr \'16', 'May\'16', 'Jun \'16', 'Jul \'16', 'Aug \'16', 'Sep \'16', 'Oct \'16', 'Nov\'16', 'Dec \'16']
        },
        labels:
        {
            items: [
            {
                style:
                {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        legend:
        {
            borderRadius: 0,
            squareSymbol: false,
            symbolRadius: 0,
            symbolWidth: 35,
            itemStyle: {
                fontSize: '14px'
            }
        },
        series: [
            {
                name: 'Open',
                data: [30, 20, 30, 8, 17, 18, 12, 3, 4, 2, 1, 8, 9]

        },
            {
                name: 'Pending',
                data: [8, 3, 6, 2, 9, 6, 5, 3, 4, 1, 1, 6, 3]
        },
            {
                name: 'Closed',
                data: [24, 21, 19, 29, 19, 16, 18, 23, 40, 20, 12, 12, 20]


        }]
    });
    Highcharts.chart('highchar-pies',
        {
            chart: {
                type: 'pie'
            },
            title:
            {
                text: ''
            },
            tooltip: {
                formatter: function () {
                    return this.point.name + ' ' + this.y;
                }
            },
            series: [
                {
                    name: 'Total consumption',
                    data: [
                        {
                            name: 'Open:',
                            y: 162,
                            color: Highcharts.getOptions()
                                .colors[0]
                        },
                        {
                            name: 'Pending:',
                            y: 57,
                            color: Highcharts.getOptions()
                                .colors[1]
                        },
                        {
                            name: 'Closed:',
                            y: 273,
                            color: Highcharts.getOptions()
                                .colors[2]
                        }],
                    center: [140, 150],
                    size: 250,
                    showInLegend: false,
                    dataLabels:
                    {
                        enabled: false
                    }
                }]
        });
});
