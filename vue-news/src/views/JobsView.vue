<template>
  <div>
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <!-- :href 축약됨 > v-bind:href랑 같음 -->
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{job.domain}}</small>
    </p>
  </div>
</template>

<script>


export default {  
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>