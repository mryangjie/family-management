import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {
    Home,
    Login,
    CompletInfo,
    RetrievePassword,
    GetVerificationCode,
    SetPassword,
    Register,

    FamilyOverview,
    LineageBook,
    FamilyHistory,
    UserCenter,
    SetUp

} from './router-components';

const routes = [{
        path: '/',
        component: Home,
        name: 'home',
        children: [{
                path: '/familyOverview',
                component: FamilyOverview,
                name: 'familyOverview',
                meta: {
                    keepAlive: true,
                    requireAuth: true,
                }
            },
            {
                path: '/lineageBook',
                component: LineageBook,
                name: 'lineageBook',
                meta: {
                    keepAlive: true,
                    requireAuth: true,
                }
            },
            {
                path: '/familyHistory',
                component: FamilyHistory,
                name: 'familyHistory',
                meta: {
                    keepAlive: true,
                    requireAuth: true,
                }
            },
            {
                path: '/userCenter',
                component: UserCenter,
                name: 'userCenter',
                meta: {
                    keepAlive: true,
                    requireAuth: true,
                }
            },
            {
              path: '/setUp',
              component: SetUp,
              name: 'setUp',
              meta: {
                keepAlive: true,
                requireAuth: true,
              }
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/completInfo',
        component: CompletInfo,
        name: 'completInfo'
    },
    {
        path: '/retrievePassword',
        component: RetrievePassword,
        name: 'retrievePassword'
    },
    {
        path: '/getVerificationCode',
        component: GetVerificationCode,
        name: 'getVerificationCode'
    },
    {
        path: '/setPassword',
        component: SetPassword,
        name: 'setPassword'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes: routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage["token"]) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default router
