const chartData = {
    labels: ["WIND", "HYDRO & TIDAL", "NATURAL GAS & OIL", "BIOMASS", "SOLID FUEL", "IMPORTS"],
    data: [12, 9, 20, 3, 43, 13],
    colors: [
        '#29a329',
        '#1b1b9d',
        '#3e3e3e',
        '#0d547a',
        '#c6c646',
        '#2e1d7a'
    ]
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
                backgroundColor: chartData.colors
            },
        ],
    },
    options: {
        borderWidth: 2,
        borderRadius: 2,
        plugins: {
            legend: {
                display: false,
            },
            doughnutlabel: {
                labels: [
                    {
                        text: '24% renewables', // Text to display in the center
                        font: {
                            size: '20'  // Font size for the text
                        }
                    },
                ]
            }
        }
    }
});