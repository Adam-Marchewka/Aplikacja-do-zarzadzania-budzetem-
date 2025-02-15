const expensesChart = document.getElementById('expenses-chart');
const incomeChart = document.getElementById('income-chart');

new Chart(incomeChart, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#4CAF50', 
            '#8BC34A', 
            '#2196F3', 
            '#03A9F4', 
            '#FFC107', 
            '#FF9800'
        ],
        hoverBackgroundColor: [
            '#43A047', 
            '#7CB342', 
            '#1E88E5', 
            '#039BE5', 
            '#FFB300', 
            '#FB8C00'
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

new Chart(expensesChart, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#F44336',
            '#B71C1C',
            '#FF9800',
            '#FF5722',
            '#795548',
            '#5D4037',
            '#9E9E9E'
          ],
          hoverBackgroundColor: [
            '#E53935',
            '#D32F2F',
            '#FB8C00',
            '#F4511E',
            '#6D4C41',
            '#4E342E',
            '#757575'
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