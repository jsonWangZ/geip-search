<!--
 * @Author: your name
 * @Date: 2021-07-05 10:08:23
 * @LastEditTime: 2021-07-05 14:18:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/src/plugins/search/index.vue
-->
<template>
  <transition name='fade'>
    <div class="search-body">
      <el-button type="primary">search button</el-button>
      <div>search button</div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Search',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
    document.querySelector('a').addEventListener('click', e => {
      e.preventDefault();
    })
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.search-body {

}
</style>
