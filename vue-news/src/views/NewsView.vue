<template>
  <div>
    <list-item/>
  </div>
</template>

<script>
import bus from '../utils/bus';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS')
    .then(() => {
      //setTimeout(() => {bus.$emit('end:spinner'); }, 3000);
      bus.$emit('end:spinner');  
    }).catch((error) => {
      console.log(error);
    });
  }
}
</script>

<style scoped>

</style>