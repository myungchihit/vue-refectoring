<template>
  <div>
    <div v-for="news in this.$store.state.news" v-bind:key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    // .then(response => this.newses = response.data)
    // .catch(error => console.log(error));
  }
}
</script>

<style>

</style>