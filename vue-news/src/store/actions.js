import { fetchUserInfo, fetchCommentItem, fetchList } from '../api/index';

export default {
    // FETCH_NEWS(context) {  // actions 파라미터로 context
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data); // mutation 호출
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_JOBS({ commit }) { // context 생략 가능
    //     return fetchJobsList()
    //     //.then(response => this.jobs = context.commit('SET_JOBS', response.data))
    //     .then(({ data }) => this.jobs = commit('SET_JOBS', data))
    //     .catch(error => console.log(error));
    // },
    // FETCH_ASKS({ commit }) {
    //     return fetchAskList()
    //     .then(({ data }) => this.asks = commit('SET_ASKS', data))
    //     .catch(error => console.log(error));            
    // },
    FETCH_USER({ commit }, userName){
        return fetchUserInfo(userName)
        .then(({ data }) => this.jobs = commit('SET_USER', data))
        .catch(error => console.log(error));            
    },
    FETCH_ITEM({ commit }, id){
        return fetchCommentItem(id)
        .then(({ data }) => this.item = commit('SET_ITEM', data))
        .catch(error => console.log(error));            
    },
    FETCH_LIST({ commit }, name ){
        return fetchList(name)
        .then((response) => {
            commit('SET_LIST', response.data)
            return response;
        })
        .catch(error => console.log(error));
    }
}