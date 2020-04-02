import actions from './actions.js'
import getters from './getters.js'
import { 
	GET_USER_INFORMATION
} from './mutation-types.js'

const state = {
	userInformation:{}
}

const mutations = {
	[GET_USER_INFORMATION](state,data){
		state.userInformation = data;
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}
