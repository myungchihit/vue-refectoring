<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <!-- template과 div의 차이는 template은 태그없이 바로 텍스트로 들어감 -->
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
    <!-- <user-profile></user-profile> -->
    <!-- <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  // props로 내려보낼시
  computed: {
      userInfo(){
          return this.$store.state.user;
      }
  },
  created(){
      // 동적 라우팅 path에서 id값 가져오기
      const userName = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>