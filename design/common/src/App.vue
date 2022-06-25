<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
      change: false,
    }
  },
  methods: {
    renewItems() {
      this.change = !this.change;
      if(this.change) this.items = [40, 50, 60];
      else this.items = [10, 20, 30];
    },
  },
}
</script>