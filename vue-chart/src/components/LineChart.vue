<template>
  <canvas ref="myChart" id="lineChart"></canvas>
</template>

<script>
export default {
    mounted() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        // eslint-disable-next-line no-unused-vars
        const myChart = new this.$_Chart(
            //document.getElementById('lineChart'),
            this.$refs.myChart,
            config,
        );
    }
}
</script>

<style>

</style>