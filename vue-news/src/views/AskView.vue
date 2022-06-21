<template>
  <div>
    <ul class="news-list">
      <li v-for="ask in askItems" v-bind:key="ask.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 정보 영역 -->
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
    </ul>
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

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style : none;
  display: flex;
  align-items: center;
  border-bottom : 1px solid #eee;
}
.points{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>