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
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
}
</script>
