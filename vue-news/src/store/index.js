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
        FETCH_JOBS(context) {
            fetchJobsList()
            .then(response => this.jobs = context.commit('SET_JOBS', response.data))
            .catch(error => console.log(error));
        },
        FETCH_ASKS(context) {
            fetchAskList()
            .then(response => this.jobs = context.commit('SET_ASKS', response.data))
            .catch(error => console.log(error));            
        }
    }
});