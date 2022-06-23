import axios from "axios";

// 1. HTML Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

async function fetchCommentItem(id){
    try {
        const response = await axios.get(`${config.baseUrl}item/${id}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

function fetchList(pageName){
    try {
        const response = axios.get(`${config.baseUrl}${pageName}.json`);
        return response;   
    } catch (error) {
        console.log(error);
    }
}

export{
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}