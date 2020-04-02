// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from './store/index.js';
import Element from 'element-ui'
import _ from 'lodash'
import 'element-ui/lib/theme-chalk/index.css'
import './components/installComponents.js'

Vue.config.productionTip = false
Vue.use(Element)

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  

localStorage["token"]='test'

/* eslint-disable no-new */
window.rootApp = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
