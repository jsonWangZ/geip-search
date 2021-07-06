/*
 * @Author: your name
 * @Date: 2021-07-05 10:12:08
 * @LastEditTime: 2021-07-06 10:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/src/plugins/index.js
 */
import Search from './search/index.vue'

const install = function(Vue) {
  Vue.component('Search', Search);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { Search }

export default {
  version: '0.0.1',
  install,
  Search
}
