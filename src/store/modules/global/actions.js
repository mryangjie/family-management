import {
    HIDE_ROUTE_LOADING,
    GET_USERINFO_LOGIN,
    GET_PROVINCES,
    GET_CITIES,
    GET_AREAS,

    api_login,
    api_register,
    api_registrationCodeRequest,
    api_getProvinces,
    api_getCities,
    api_getAreas,
	  api_findPwdCodeRequest,
	  api_findPwdVerify,
    api_findPwdReset


} from './mutation-types.js'
import { createAction, createPutAction } from '../../utils/helpers.js';

const actions = {
  hideRouteLoading({commit}, flag) {
    commit(HIDE_ROUTE_LOADING, flag)
  },
  getLogin: createAction('postl', api_login, GET_USERINFO_LOGIN),
  getRegister: createAction('postl', api_register),
  getRegistrationCodeRequest: createAction('get', api_registrationCodeRequest),
  getProvinces: createAction('get', api_getProvinces, GET_PROVINCES),
  getCities: createAction('get', api_getCities, GET_CITIES),
  getAreas: createAction('get', api_getAreas, GET_AREAS),
  getFindPwdCodeRequest: createAction('get', api_findPwdCodeRequest),
  getFindPwdVerify: createAction('get', api_findPwdVerify),
  getFindPwdReset: createAction('get', api_findPwdReset),
}
export default actions
