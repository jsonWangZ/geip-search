/*
 * @Author: your name
 * @Date: 2021-07-05 10:12:08
 * @LastEditTime: 2021-07-05 14:17:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/src/plugins/index.js
 */
import Search from './search/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Search', Search)
}

Search.install = function (Vue) {
  Vue.component(Search.name, Search)
}
export default Search