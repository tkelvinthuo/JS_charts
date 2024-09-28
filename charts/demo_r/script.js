// Create the echarts instance for the first chart
var myChart = echarts.init(document.getElementById('main'));

// Create the echarts instance for the second chart
var myChart2 = echarts.init(document.getElementById('main2'));

// Initial chart option for the first chart
var option1 = {
    title: {
        text: 'Sales'
    },
    tooltip: {},
    legend: {
        data: ['sales'],
    },
    xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
};

// Draw the initial chart for the first chart
myChart.setOption(option1);

// Initial chart option for the second chart
var option2 = {
    title: {
        text: 'Stock'
    },
    tooltip: {},
    legend: {
        data: ['sales'],
    },
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'line',
            data: [15, 30, 25, 20, 15, 10]
        }
    ]
};

// Draw the initial chart for the second chart
myChart2.setOption(option2);

// Function to update the first chart based on user input
function updateChart1() {
    var categoriesInput = document.getElementById('categories1').value;
    var dataInput = document.getElementById('data1').value;

    var categories = categoriesInput.split(',').map(item => item.trim());
    var data = dataInput.split(',').map(item => parseFloat(item.trim()));

    if (categories.length !== data.length || categories.length === 0 || data.length === 0) {
        alert("Please ensure both categories and data have the same number of elements for Chart 1.");
        return;
    }

    myChart.setOption({
        title: {
            text: 'Sales Data Updated'
        },
        xAxis: {
            data: categories
        },
        series: [{
            name: 'sales',
            type: 'line',
            data: data
        }]
    });
}

// Function to update the second chart based on user input
function updateChart2() {
    var categoriesInput = document.getElementById('categories2').value;
    var dataInput = document.getElementById('data2').value;

    var categories = categoriesInput.split(',').map(item => item.trim());
    var data = dataInput.split(',').map(item => parseFloat(item.trim()));

    if (categories.length !== data.length || categories.length === 0 || data.length === 0) {
        alert("Please ensure both categories and data have the same number of elements for Chart 2.");
        return;
    }

    myChart2.setOption({
        title: {
            text: 'Other Data Updated'
        },
        xAxis: {
            data: categories
        },
        series: [{
            name: 'sales',
            type: 'line',
            data: data
        }]
    });
}
