<template>
  <div id="app">
    <a href="./coupon.html" style="font-size: 0.426rem">跳到优惠券页面</a>
    <br/>
    <br/>
    <span style="font-size: 0.426rem;">100元优惠券</span>
    <div style="padding-top: 100px;">
      <br/>
      <div class="test">
        <!-- <cube-input v-model="value" placeholder="请输入手机号码"></cube-input> -->
        <br/>
        <!-- <cube-button :primary="true">领取优惠券</cube-button> -->
      </div>
      <br/>

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      value: ''
    }
  },

  methods: {
    inputFocus() {
      setTimeout(() => {
        console.log(this.$refs.inputBox)
        window.scrollTo(0,document.body.offsetHeight);
      }, 200)
    }
  }
}
</script>

<style>
.test, .validateBox {
  padding: 0 1rem
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
