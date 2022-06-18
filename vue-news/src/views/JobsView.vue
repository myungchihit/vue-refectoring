<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job.id"> {{ job.title }} </div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index';

export default {
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    var vm = this;
    fetchJobsList()
    .then(response => {
      vm.jobs = response.data;
    })
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>