<template>
  <div>
    <!-- 
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{job.domain}}</small>
    </p> 
    -->

    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.point || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <!-- :href 축약됨 > v-bind:href랑 같음 -->
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
  </div>
</template>

<script>
export default {  
  created() {
    this.$store.dispatch('FETCH_JOBS');
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