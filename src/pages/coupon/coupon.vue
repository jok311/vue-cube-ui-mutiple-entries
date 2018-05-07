<template>
  <div class="coupon-box">
    <div class="img-box">
      <!-- <img src="./img/promotion.jpg" alt=""> -->
      <div class="coupon-template" v-if="!isShowMsg">
        <coupon-template-two></coupon-template-two>
      </div>
      <div class="introduce">
        <!-- <div class="company">万城万充</div> -->
        <!-- <div class="rmb-box">
          <span class="rmb-msg">注册就送</span>
          <span class="rmb">100元</span>
        </div>
        <div class="rules">登记手机号码，下载app注册可获得100元</div> -->
      </div>
    </div>    
    <div class="user-message-box" v-if="!isShowMsg">
      <cube-input v-if="!ismcmcBrower" v-model="mobile" placeholder="请输入手机号码"></cube-input>
      <cube-validator v-model="mobileValid" :model="mobile" :rules="mobileRules" :messages="mobileMessages"></cube-validator>
      <br/>
      <cube-button :primary="true" @click="getCoupon">立即领取</cube-button>
      <br/>
      <cube-button :primary="true" @click="toShowShare">分享给好友</cube-button>      
    </div>
    
    <div class="msg-box" v-if="isShowMsg">
      <!-- <cube-button :primary="true">跳转到万城万充APP</cube-button> -->
      <div class="msg">{{msg}}</div>
    </div>


    <!-- <a href="./index.html" style="font-size: 0.426rem;padding-top: 100px;">跳到首页面</a> -->
  </div>
</template>

<script>

import couponTemplate from './components/couponTemplate'
import couponTemplateTwo from './components/couponTemplateTwo'

import { receiveCoupon, queryActivityById } from '@/api/modules/coupon';

import { getUrlParam, getVersion } from '@/utils'

import { getSystem } from '@/utils/appFunctions'


export default {
  name: 'coupon-box',
  data () {
    return {
      //是否再万城万充APP内
      ismcmcBrower: false,
      mobile: '',
      // 验证手机号码
      mobile: '',
      mobileValid: undefined,
      mobileRules: {
        type: 'number',
        custom: (val) => {
          return val.length == 11
        },
      },
      mobileMessages: {
        pattern: '请输入正确的手机号码',
        custom: '请输入正确的手机号码'        
      },
      //推荐人手机号码
      invitationId: "13580397433",
      // 活动ID
      activityCode: "",


      //返回文字说明
      msg: "",
      isShowMsg: false

    }
  },
  components: {
    couponTemplate, couponTemplateTwo
  },
  watch: {
    mobile(val) {
      console.log(val)
    }
  },
  created () {


    
  },
  mounted () {



    if(getVersion() > -1) {
      this.ismcmcBrower = true
      //安卓
      if(getSystem() == 'android') {
        console.log(android.getAccount())



        let shareData = {
          shareTitle: "万城万充",
          shareDescription: "优惠券",
          shareUrl: window.location.href,
          shareImageURLString: "http://www.gdmcmc.cn/gdmcmc/images/favicon.ico"
        };

        console.log(shareData)
        // console.log(android.showShareView(JSON.stringify(shareData)))
      }else if(getSystem() == 'ios') {
        console.log('ios')

        setupWebViewJavascriptBridge(function(bridge) {

         bridge.registerHandler('getAccount', function(data, responseCallback) {
          var responseData = { 'Javascript Says':'Right back atcha!' }
          console.log("22222222222")
          responseCallback(responseData)
        })

      })

      }

    }

    this.activityCode = getUrlParam("activityCode");

    // 判断链接是否带了活动ID
    if(this.activityCode) {

      this.queryActivity(); //获取活动信息
      // 判断是否参数过该活动
      // if(window.localStorage.isShowMsg && window.localStorage.activityCode == this.activityCode) {
      //   this.isShowMsg = true
      //   this.msg = window.localStorage.msg
      // }

    }else{
      this.isShowMsg = true
      this.msg = "无此活动的信息"
    }    
  },
  methods: {

    toShowShare() {


      let shareData = {
        shareTitle: "万城万充",
        shareDescription: "优惠券",
        shareUrl: window.location.href,
        shareImageURLString: "http://www.gdmcmc.cn/gdmcmc/images/favicon.ico"
      };


      if(getSystem() == 'android') {
      
        android.showShareView(JSON.stringify(shareData))
      // android.getAccount()
      }else if(getSystem() == 'ios'){

      function setupWebViewJavascriptBridge(callback) {
          if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
          if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
          window.WVJBCallbacks = [callback];
          var WVJBIframe = document.createElement('iframe');
          WVJBIframe.style.display = 'none';
          WVJBIframe.src = 'https://__bridge_loaded__';
          document.documentElement.appendChild(WVJBIframe);
          setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
        }

        setupWebViewJavascriptBridge(function(bridge) {
            bridge.registerHandler('getAccount', function(data, responseCallback) {
              console.log(responseCallback)
              console.log("JS Echo called with:", data)
              // responseCallback(data)
            })

            bridge.callHandler('getAccount',{}, function(data, responseCallback) {
            var responseData = { 'Javascript Says':'Right back atcha!' }
            console.log(data)
            console.log(responseData)
            responseCallback(responseData)
          })
        })   


        setupWebViewJavascriptBridge(function(bridge) {

            let shareData = {
              shareTitle: "万城万充",
              shareDescription: "优惠券",
              shareUrl: window.location.href,
              shareImageURLString: "http://www.gdmcmc.cn/gdmcmc/images/favicon.ico"
            };

            bridge.registerHandler('showShareView', function(data, responseCallback) {
              console.log(responseCallback)
              console.log("JS Echo called with:", data)
              // responseCallback(data)
            })

            bridge.callHandler('showShareView',shareData, function(data, responseCallback) {
            var responseData = { 'Javascript Says':'Right back atcha!' }
            console.log(data)
            console.log(responseData)
            responseCallback(responseData)
          })
        })           

      }

 
    },



    // 登记手机号码获取优惠券
    getCoupon() {
      let data = {
        activityCode: this.activityCode,
        invitationId: this.invitationId,
        phone: this.mobile
      };

      if(this.mobileValid) {
        receiveCoupon(data).then( res => {
          this.msg = res.data.return_msg
          if(res.data.return_code != "3") {
            window.localStorage.setItem("isShowMsg", true)
            window.localStorage.setItem("msg", res.data.return_msg)
            window.localStorage.setItem("activityCode", this.activityCode)
          }
          
          this.isShowMsg = true
        })
        .catch( err => {
          console.log(err)
        })
      }else{

      }


    },
    queryActivity() {
      let data = {
        phone: this.mobile,
        activityCode:  this.activityCode
      };
      queryActivityById(data).then( res => {
        if(res.data.return_code == 0) {
          // console.log(res.data.return_data)
        }else if(res.data.return_code == "10002") {
          this.isShowMsg = true;
          this.msg = res.data.return_msg;
        }
      })
      .catch( err => {
        console.log(err)
      })
    }
  }      
}
</script>

<style>

.coupon-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #f8f8f8
}
</style>



<style lang="stylus" scoped>
.coupon-box
  min-height 100vh
  box-sizing border-box
  .img-box
    position relative
    padding 50px 24px 
    box-sizing border-box
    img
      width 100%
    .introduce
      width 100%
      font-size 24px
      position absolute
      top 42px
      .company
        font-size 24px
        color #fff
        text-align center
        padding-bottom 28px
        font-weight 600
      .rmb-box
        padding-bottom 12px
        .rmb-msg
          color #fff
          font-weight 500
        .rmb
          color #FFF9A9
          font-size 40px
          font-weight 600
      .rules
        font-size 16px
        color #fff
  .user-message-box
    padding 24px
  .msg-box
    font-size 16px
    padding 0 24px
    line-height 22px
    text-align center
    color #3a3a3a
    .msg
      margin 12px 0 0 0 
</style>
<style lang="stylus">
.coupon-box
  .cube-btn-primary::after
    border none
  .cube-input::after
    border 2px solid #fc9153
    border-radius 2px
.coupon-box
  .cube-validator-msg
    text-align left 
    .cube-validator-msg-def
      color rgb(187, 187, 187)    
</style>

<style lang="stylus" scoped>
.coupon-template
  width 100%
  box-sizing border-box
</style>



