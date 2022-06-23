import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
//import createListView from '../views/CreateListView';
import bus from '../utils/bus';

// 라우터 파일 내에서는 this로 $store를 접근할 수가 없다.
// 뷰엑스 인스턴스와 라우터 인스턴스는 뷰에만 연결할 수 있다.
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            //component: createListView('NewsView'),
            beforeEnter: (to, from , next) => {
                // to : 이동할 URL 라우팅 정보
                // from : 현재 URL 라우팅 정보
                bus.$emit('start:spinner');
                //this.$store.dispatch('FETCH_LIST', this.$route.name)
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  // beforeEneter를 쓴경우에는 next()를 실행하지 않으면 페이지 이동이 되지 않는다.
                  next();
                }).catch((error) => {
                  console.log(error);
                });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView'),
            beforeEnter: (to, from , next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                  }).catch((error) => {
                    console.log(error);
                  });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView'),
            beforeEnter: (to, from , next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                  }).catch((error) => {
                    console.log(error);
                  });
            }
        },
        {
            path: '/item/:id',
            component: ItemView
        },
        {
            // dynamic router
            path: '/user/:id',
            component: UserView
        }
    ]
});