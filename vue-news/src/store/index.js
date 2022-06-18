import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index';
import {  } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news : [],
        jobs : [],
        asks : [],
    },
    getters: {
        fetchedAsk(state){
            return state.asks;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
        ,
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASKS(state, asks){
            state.asks = asks;
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
        FETCH_JOBS({ commit }) { // context 생략 가능
            fetchJobsList()
            //.then(response => this.jobs = context.commit('SET_JOBS', response.data))
            .then(({ data }) => this.jobs = commit('SET_JOBS', data))
            .catch(error => console.log(error));
        },
        FETCH_ASKS({ commit }) {
            fetchAskList()
            .then(({ data }) => this.jobs = commit('SET_ASKS', data))
            .catch(error => console.log(error));            
        }
    }
});