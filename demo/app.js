// Step 1: Initialize chart context
const ctx = document.getElementById('myChart').getContext('2d');

// Step 2: Create a global variable for the chart
let myChart = new Chart(ctx, {
    type: 'bar',  // Default chart type
    data: {
        labels: ['January', 'February', 'March'],  // Default labels
        datasets: [{
            label: 'Sales',  // Default label
            data: [10, 20, 30],  // Default data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Step 3: Function to update the chart based on user input
function updateChart() {
    // Get values from the form
    const labelsInput = document.getElementById('labels').value;
    const dataInput = document.getElementById('data').value;
    const chartType = document.getElementById('chartType').value;

    // Process the inputs: split comma-separated strings into arrays
    const labels = labelsInput.split(',').map(label => label.trim());
    const data = dataInput.split(',').map(num => parseFloat(num.trim()));

    // If input data isn't valid, display an alert
    if (labels.length === 0 || data.length === 0 || labels.length !== data.length) {
        alert("Please enter valid labels and data.");
        return;
    }

    // Update chart type and data dynamically
    myChart.config.type = chartType;
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data;
    myChart.data.datasets[0].label = "User Data";  // Update dataset label
    
    // Refresh the chart to reflect changes
    myChart.update();
}
