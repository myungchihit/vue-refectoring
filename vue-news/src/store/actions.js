import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index';

export default {
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
        .then(({ data }) => this.asks = commit('SET_ASKS', data))
        .catch(error => console.log(error));            
    },
    FETCH_USER({ commit }, userName){
        fetchUserInfo(userName)
        .then(({ data }) => this.jobs = commit('SET_USER', data))
        .catch(error => console.log(error));            
    }
}