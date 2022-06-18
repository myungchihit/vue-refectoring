import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news : [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions : {
        FETCH_NEWS(context) {  // actions 파라미터로 context
            fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data); // mutation 호출
            })
            .catch(error => {
                console.log(error);
            })
        },

    }
});