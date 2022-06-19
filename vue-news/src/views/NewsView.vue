<template>
  <div>
    <p v-for="news in this.$store.state.news" v-bind:key="news.id">
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }} by 
        <router-link v-bind:to="`/user/${news.user}`">
          {{ news.user }}
        </router-link>
      </small>
    </p>
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