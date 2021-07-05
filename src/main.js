/*
 * @Author: your name
 * @Date: 2021-07-05 09:31:55
 * @LastEditTime: 2021-07-05 14:18:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/basic-components'
import './styles/index.scss'
import Search from './plugins/index'
Vue.config.productionTip = false
Vue.use(Search)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
