import Chart from 'chart.js';

// Chart import를 플러그인을 통해서 첫 설치 후 계속 사용하기위함.
export default {
    install(Vue){
        Vue.prototype.$_Chart = Chart;

        // BarChart.vue , LineChart.vue 에서 사용법
        // this.$_Chart
    }
}