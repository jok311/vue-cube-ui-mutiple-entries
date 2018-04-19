import Vue from '@/utils/initVue.js';//全局初始化vue对象

import App from './index.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
