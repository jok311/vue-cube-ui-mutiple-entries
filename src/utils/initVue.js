import Vue from 'vue'
import 'amfe-flexible'
// import request from './request'
// Vue.prototype.request = request //请求函数
import {
    /* eslint-disable no-unused-vars */
    Style,
    Button,
    Input,
    validator
  } from 'cube-ui'
// 全局注册
Vue.use(Button)
Vue.use(Input)
Vue.use(validator)



// //手机端调试工具
import vconsole from 'vconsole'
if (process.env.NODE_ENV == 'development') {
	var mconsole = new vconsole();
}


Vue.config.productionTip = false

export default Vue