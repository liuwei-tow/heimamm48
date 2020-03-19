
import Vue from 'vue'

import App from './App.vue'

import router from './router'

import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './style/index.css'
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
