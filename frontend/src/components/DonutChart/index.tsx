import Chart from 'react-apexcharts';

const DonatChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            /*três pontinhos para incorporar e reaproveitar o objeto acrescentando mais coisas.
            mockData para exemplificar, mocando dados para teste temporarios */
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonatChart;