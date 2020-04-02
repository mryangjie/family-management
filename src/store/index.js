import Vue from 'vue'
import Vuex from 'vuex'
import { actions, mutations, state, getters } from './modules/global/global.js'
import home from './modules/home/home.js';
import familyManagement from './modules/familyManagement/familyManagement.js';
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        home,
        familyManagement

    }
})