import bus from '../utils/bus';

export default {
    // 재사용할 컴포넌트 옵션
    //created() {
        // bus.$emit('start:spinner');
        // this.$store.dispatch('FETCH_LIST', this.$route.name)
        // .then(() => {
        //   setTimeout(() => {bus.$emit('end:spinner'); }, 1000);
        //   //bus.$emit('end:spinner');  
        // }).catch((error) => {
        //   console.log(error);
        // });
    //}
    mounted() {
      bus.$emit('end:spinner');
    },
}