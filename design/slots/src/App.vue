<template>
  <div>
    <ul>
      <item v-for="(item, i) in items" :key="i">
        <div @click="onClick({item})">{{ item }}</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2' , '아이템 3', '아이템 4', '아이템 5']
    }
  },
  methods: {
    onClick(item) {
      // eslint-disable-next-line no-console
      console.log(item);
    },
  }
}
</script>