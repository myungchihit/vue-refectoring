<template>
    <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <div>
            <!-- {{ userInfo.id }} -->
            {{ Info.id }}
        </div>
        <!-- <router-link :to="`/user/${userInfo.user}`">
            {{ userInfo.id }}
        </router-link> -->
        <div class="time">
            <!-- {{ userInfo.created }} -->
            {{ Info.created }}
        </div>
    </div>
    </div>
</template>

<script>
export default {
// userInfo 받아오는 방법은 2가지이다.
// 1. UserView에서 props로 데이터를 내려주는 방법
  props:{
    Info: Object,
  },
// 2. UserView에서 vuex state에다가 이미 user정보를 넣어놨기 때문에 그거 가져다 쓰는거
//   computed: {
//       userInfo(){
//           return this.$store.state.user;
//       }
//   },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user{
  font-size: 2.5rem;
}

.user-description{
  padding-left: 8px;
}

.time{
  font-size: 0.7rem;
}
</style>