<template>
  <div>
    <h2>Chanrt.js</h2>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

// export default는 컴포넌트 속성과 인스턴스 옵션 선언하는곳.
// mounted하고 script 작성
export default {
  components: {
    BarChart,
    LineChart
  },
}
</script>

<style>

</style>