<template>
  <div>
    <ul class="news-list">
      <li v-for="news in this.$store.state.news" v-bind:key="news.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ news.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="news.url">{{ news.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${news.user}`" class="link-text">
              {{ news.user }}
            </router-link>  
          </small>
        </div>
        
        <!-- <a v-bind:href="news.url">{{ news.title }}</a>
        <small>
          {{ news.time_ago }} by 
          <router-link v-bind:to="`/user/${news.user}`">
            {{ news.user }}
          </router-link>
        </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    // .then(response => this.newses = response.data)
    // .catch(error => console.log(error));
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