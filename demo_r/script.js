// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the echarts instance based on the prepared DOM
    var myChart = echarts.init(document.getElementById('main'));

    // Specify the configuration items and data for the chart
    var option = {
        title: {
            text: 'ECharts Example'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'line',
                data: [10, 20, 36, 10, 10, 20]
            }
        ]
    };

    // Display the chart using the configuration items and data just specified
    myChart.setOption(option);
});
