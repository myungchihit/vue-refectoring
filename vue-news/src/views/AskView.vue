<template>
  <div>
    <p v-for="ask in askItems" v-bind:key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} by {{ask.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:  {
    ...mapGetters({
      askItems: 'fetchedAsk'
    }),
    // #2
    // ...mapState({
    //   asks: state => state.asks
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>