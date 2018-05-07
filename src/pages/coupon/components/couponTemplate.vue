<template>
  <div class="coupon-template-bpx">
    <div class="div">
        <div class="yuan1"></div>
        <div class="yuan2"></div>
    </div>
  </div>
</template>
<style scoped>
.coupon-template-bpx {
  /* background-color: #e2dfdf; */
}
.div {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #74D2D4;
}
.yuan1 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #e2dfdf;
  left: -10px;
  top: 40px;
}
.yuan2 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #e2dfdf;
  right: -10px;
  top: 40px;
}
</style>
