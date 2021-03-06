import actions from './actions.js'
import getters from './getters.js'
import {
    HIDE_ROUTE_LOADING,
    GET_USERINFO_LOGIN,
    GET_PROVINCES,
    GET_CITIES,
    GET_AREAS,

    GET_FIRSTINDUSTRY,
    GET_SECONDINDUSTRY,
    GET_THIRDINDUSTRY,
    GET_FOURINDUSTRY

} from './mutation-types.js'

//全局常量
const state = {
    tofromOver: false,
    userInfoLogin: {},
    userToken: '', 
    provincesList: [],
    citiesList: [],
    areasList: [],
    firstIndustryList:[],
    secondIndustryList:[],
    thirstIndustryList:[],
    fourIndustryList:[],
         
}

//全局mutions
const mutations = {
    [HIDE_ROUTE_LOADING](state, flag) {
        state.tofromOver = flag
    },
    [GET_USERINFO_LOGIN](state,data){
    	if(data.user_info)  state.userInfoLogin = data.user_info || {};
        if(data.token){
        	delete localStorage['token'];
        	localStorage['token'] = data.token;
        }
    },
    [GET_PROVINCES](state,data){
        state.provincesList = data || []
    },
    [GET_CITIES](state,data){
        state.citiesList = data || []
    },
    [GET_AREAS](state,data){
        state.areasList = data || []
    },
    [GET_FIRSTINDUSTRY](state,data){
        state.firstIndustryList = data || []
    },
    [GET_SECONDINDUSTRY](state,data){
        state.secondIndustryList = data || []
    },
    [GET_THIRDINDUSTRY](state,data){
        state.thirstIndustryList = data || []
    },
    [GET_FOURINDUSTRY](state,data){
        state.fourIndustryList = data || []
    }

}

export { actions, mutations, state, getters }