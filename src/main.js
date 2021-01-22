import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import VueBus from 'vue-bus' // bus总线
Vue.use(VueBus)

import 'normalize.css' // 重置不同浏览器之间的标签默认样式

import wsCache from '@/cache' // 本地存储
Vue.prototype.$wsCache = wsCache

import './vant' // 引入vant

import './components' // 引入全局组件

import VuePageStack from 'vue-page-stack'
Vue.use(VuePageStack, { router, name: 'VuePageStack', keyName: 'stack-key' })

import { mockXHR } from '../mock'
mockXHR()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
