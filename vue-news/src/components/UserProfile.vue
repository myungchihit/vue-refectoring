<template>
    <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <!-- <div>
            {{ userInfo.id }}
            username : {{ Info.id }}
        </div> -->
        <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <!-- <router-link :to="`/user/${userInfo.user}`">
            {{ userInfo.id }}
        </router-link> -->
        <div class="time">
            <!-- {{ userInfo.created }} -->
            <!-- time : {{ Info.created }} -->
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            <slot name="time"></slot>
            <slot name="karma"></slot>
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
// vuex에서 이상정인 방법
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