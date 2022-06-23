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

    // promise
    // FETCH_USER({ commit }, userName){
    //     return fetchUserInfo(userName)
    //     .then(({ data }) => this.jobs = commit('SET_USER', data))
    //     .catch(error => console.log(error));            
    // },

    // async --> 여기서 try catch를 잡아도 되지만 api에서도 하는방법이 있음
    async FETCH_USER({ commit }, userName){
        try{
            const response = await fetchUserInfo(userName);
            commit('SET_USER', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },

    // api에서 try, catch 잡아줌
    async FETCH_ITEM({ commit }, id){
        const response = await fetchCommentItem(id)
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, name ){
        const response = await fetchList(name);
        commit('SET_LIST', response.data);
        return response;
    }
}