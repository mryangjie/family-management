import {
    api_getUserInformation
} from './mutation-types.js'
import { createAction, createPutAction } from '../../utils/helpers.js';

const actions = {
    getUserInformation:createAction('post',api_getUserInformation)
}

export default actions;