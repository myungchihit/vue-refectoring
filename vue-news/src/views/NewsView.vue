<template>
  <div>
    <div v-for="news in newses" v-bind:key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
  data() {
    return {
      newses: []
    }
  },

  created() {
    var vm = this;
    fetchNewsList().then(response => {
      vm.newses = response.data;
    })
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>