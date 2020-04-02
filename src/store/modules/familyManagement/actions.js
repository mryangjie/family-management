import {
    GET_USER_INFORMATION,

    api_getUserInformation,
    api_createFamily,
    api_familyList,
    api_bindFamily,
    api_familyByCode,
    api_japply,
    api_getUserDeedsList
} from './mutation-types.js'
import { createAction, createPutAction } from '../../utils/helpers.js';

const actions = {
    getUserInformation:createAction('post',api_getUserInformation,GET_USER_INFORMATION),
    createFamily: createAction('postl',api_createFamily),
    familyList: createAction('post',api_familyList),
    bindFamily: createAction('get',api_bindFamily),
    familyByCode: createAction('get',api_familyByCode),
    japply: createAction('post',api_japply),
    getUserDeedsList: createAction('post',api_getUserDeedsList)

}

export default actions;