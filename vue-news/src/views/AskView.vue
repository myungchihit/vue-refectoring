<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="ask in askItems" v-bind:key="ask.id" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
              {{ ask.user }}
            </router-link>  
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_ASKS')
    .then(() => {
      setTimeout(() => {bus.$emit('end:spinner'); }, 1000);
      //bus.$emit('end:spinner');  
    }).catch((error) => {
      console.log(error);
    });
  }
}
</script>
