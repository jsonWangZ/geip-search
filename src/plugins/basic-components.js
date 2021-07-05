/*
 * @Author: your name
 * @Date: 2020-12-25 18:38:22
 * @LastEditTime: 2021-06-21 18:56:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/glodon/gdmp-web/packages/spec/src/pages/data-layered-def/plugins/basic-components.js
 */
import Vue from 'vue'
import {
  Button
} from '@geip/basic-components'

const comps = [Button]

comps.forEach(comp => Vue.use(comp))
// Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$msgbox = MessageBox
