import ListView from './ListView';
import bus from '../utils/bus';

// 하이 오더 컴포넌트
// News, Jobs, Ask View가 같은 기능을 수행하고있기 때문에
// 상위 컴포넌트를 만들고 상위에서 공통역할은 묶고 각기 데이터를 분배하기위함.
export default function createListView(name){
    return{
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리.
        name: name, // 'NewsView, JobsView, AskView' 이름들..
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
              //setTimeout(() => {bus.$emit('end:spinner'); }, 3000);
              bus.$emit('end:spinner');  
            }).catch((error) => {
              console.log(error);
            });
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}