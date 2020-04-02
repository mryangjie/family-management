import httb from './HTTPS.js'


// action工厂函数
export function createAction(method, api, mtype, init) {
    if (init === 'init') {
        return async function({ dispatch, commit }, params = {}) {
            dispatch('hideRouteLoading', false);
            const res = await httb[method](api, params)
            dispatch('hideRouteLoading', true)
            mtype && res.data && commit(mtype, res.data)
            return res
        }
    }
    if (method === 'export') {
        return function({ commit }, params) {
            httb.export(api, params)
        }
    }
    return async function({ dispatch, commit }, params = {}) {
        const res = await httb[method](api, params)
        mtype && res.data && commit(mtype, res.data)
        return res
    }
}
export function createPutAction(method, api, mtype) {
    return async function({ dispatch, commit }, { body = {}, params = {} }) {
        dispatch('hideRouteLoading', true);
        const res = await httb[method](api, body, params)
        mtype && res.data && commit(mtype, res.data)
        return res
    }
}