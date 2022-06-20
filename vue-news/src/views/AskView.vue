<template>
  <div>
    <p v-for="ask in askItems" v-bind:key="ask.id">
      <router-link v-bind:to="`item/${ask.id}`">
        {{ ask.title }}
      </router-link>
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