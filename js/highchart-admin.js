$('.ioa-dashboard-graph').highcharts({
    colors: ['#1b5d9a', '#adadad', '#56a7da'],
    chart: {
        type: 'column'
    },
    title: {
        text: chartData['Title'].toUpperCase(),
        y: 20
    },
    xAxis: {
        categories: chartData['Categories']
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            allowPointSelect: true
        }
    },
    series: [{
        name: 'Open',
        data: chartData['OpenClaims']
    },
    {
        name: 'Draft',
        data: chartData['DraftClaims']
    },
    {
        name: 'Closed',
        data: chartData['ClosedClaims']
    }]
});