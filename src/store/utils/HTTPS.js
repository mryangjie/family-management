import axios from 'axios'
import router from '../../router/router'
import { Loading, Message } from 'element-ui';
let loadingInstance = null;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage["token"]) {  
            config.headers.token = localStorage["token"];
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    switch (response.data.code) {
        case 401: // 401 未登录跳到登录页
            delete localStorage['token'];
            Message.error({ message: '请重新登陆', duration: 3000 });
            // setTimeout( ()=>{
                router.currentRoute.path !== 'login' &&  
                router.replace({
                    path: 'login',
                    query: { redirect: router.currentRoute.path },
                })
            // },3000)
    }
    // return response
    return Promise.resolve(response);    
  },
  error => {
    if (error.response) {
        console.log(error.response)
    }
    return Promise.reject(error.response.data)
  },
)

//请求成功
function handleSuccess(res) {
    if (res) {
        loadingInstance && loadingInstance.close();
        let code = res.data.code;
        if (code == "00000004") { //跳转到登录页由 前端 做处理
            
        } else {
            return res.data
        }
    }
}

//请求失败
function handleError(err) {
    loadingInstance && loadingInstance.close();
    Message.error({ message: '网络错误，请稍后重试！', duration: 1000 });
    console.log(err)
}

// get请求
function getAjax(type, url, params) {
    return axios[type](
        url, { params }
    ).then(res => handleSuccess(res), err => handleError(err))
}

// post请求
function postAjax(type, url, body, params) {
    return axios[type](
        url,
        body, { params }
    ).then(res => handleSuccess(res), err => handleError(err))
}

//基础请求方法
function baseAjax(type, url, body, params) {
    switch (type) {
        case 'get':
        case 'delete':
            return getAjax(type, url, params)
        case 'post':
        case 'put':
            return postAjax(type, url, body, params)
    }
}

// 输出get请求
function hget(url, params) {
    return baseAjax('get', url, {}, params)
        .then(res => res)
}

// 输出loading框get
function hgetl(url, params) {
    loadingInstance = Loading.service();
    return baseAjax('get', url, {}, params)
        .then(res => res)
}

// 输出post请求
function hpost(url, body, params) {
    return baseAjax('post', url, body, params)
}

function hpostl(url, body, params) {
    loadingInstance = Loading.service();
    return baseAjax('post', url, body, params)
}

function exportLoad(url, params) {
    let query = '';
    for (let key in params) {
        query += `${key}=${params[key]}&`;
    }
    window.location.href = url + '?' + query
}

export default {
    get: hget,
    getl: hgetl,
    post: hpost,
    postl: hpostl,
    export: exportLoad,
}