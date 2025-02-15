// WYDATKI - LocalStorage

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-data');
    // const list = document.getElementById('data-list');

    // Pobieranie danych z localStorage
    function getData() {
        return JSON.parse(localStorage.getItem('Wydatki')) || [];
    }

    // Zapisywanie danych w localStorage
    function setData(data) {
        localStorage.setItem('Wydatki', JSON.stringify(data));
    }

    // Dodawanie danych z formularza
    function addData(event) {
        event.preventDefault(); 
        const amountExpenses = document.getElementById('amountExpenses1').value;
        const typeExpenses = document.getElementById('type2').value;
        const colorExpenses = document.getElementById('color2').value;

        const sumExpenses = parseFloat(amountExpenses) || 0;

        const newData = { sumExpenses, typeExpenses, colorExpenses };
        const data = getData();
        data.push(newData);
        setData(data);

        renderData(); 
        if (form){ 
            form.reset()
        }
    }

    // Renderowanie danych na liście
    function renderData() {

        const data = getData();

        const type = data.map(item => item.typeExpenses);
        const sum = data.map(item => item.sumExpenses);
        const color = data.map(item => item.colorExpenses || '#9E9E9E');

        const ctx = document.getElementById("expenses-chart").getContext('2d');

        // Zniszczenie poprzedniego wykresu
        if (window.myChart instanceof Chart){
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: type,
              datasets: [{
                data: sum,
                backgroundColor: color,
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                    position: 'top'
                }
              }
            }
        });
        
    }

    if (form) {
        form.addEventListener('submit', addData);
    }

    renderData();
});

// DOCHÓD

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-data1');

    // Pobieranie danych z localStorage
    function getData() {
        return JSON.parse(localStorage.getItem('Dochod')) || [];
    }

    // Zapisywanie danych w localStorage
    function setData(data) {
        localStorage.setItem('Dochod', JSON.stringify(data));
    }

    // Dodawanie danych z formularza
    function addData(event) {
        event.preventDefault(); 
        const amountExpenses = document.getElementById('amountIncome1').value;
        const typeExpenses = document.getElementById('type1').value;
        const colorExpenses = document.getElementById('color1').value;

        const sumExpenses = parseFloat(amountExpenses) || 0;

        const newData = { sumExpenses, typeExpenses, colorExpenses };
        const data = getData();
        data.push(newData);
        setData(data);

        renderData(); 
        if (form){ 
            form.reset()
        }
    }

    // Renderowanie danych na liście
    function renderData() {

        const data = getData();

        const type = data.map(item => item.typeExpenses);
        const sum = data.map(item => item.sumExpenses);
        const color = data.map(item => item.colorExpenses || '#9E9E9E');

        const ctx = document.getElementById("income-chart").getContext('2d');

        // Zniszczenie poprzedniego wykresu
        if (window.myChart instanceof Chart){
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: type,
              datasets: [{
                data: sum,
                backgroundColor: color,
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                    position: 'top'
                }
              }
            }
        });
        
    }

    if (form) {
        form.addEventListener('submit', addData);
    }

    renderData();
});