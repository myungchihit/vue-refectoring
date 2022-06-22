<template>
  <div>
    <list-item></list-item>
    <!--
      <ul class="news-list">
        <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
          <div class="points">
            {{ job.point || 0 }}
          </div>
          <div>
            <p class="news-title">
              <a :href="job.url">{{ job.title }}</a>
            </p>
            <small class="link-text">
              by
              <a :href="job.url" class="link-text">
                {{job.domain}}
              </a>
            </small>
          </div>
        </li>
      </ul> 
    -->
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