<template>
  <div class="coupon-template-two">
<ul class="stamp_list">  
    <li class="stamp">  
        <div class="stamp_inner stamp_left">
					<div class="left-content">
						<div class="activity-title">人人打折</div>
						<div class="activity-content">全都97折！</div>
						<div class="activity-period">2018-04-18 至 2018-05-24</div>
					</div>
        </div  
        ><div class="stamp_inner stamp_right">  
            <div class="right-content-box">
                <span class="sale">97<span class="unit">{{ Preferen_type == 1 ? "折" : "元" }}</span></span>
            </div>
            <ul class="circle_list circle_list1">  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
            </ul>  
            <!-- <ul class="circle_list circle_list2">  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
                <li></li>  
            </ul>   -->
        </div>  
    </li>  
</ul>        
  </div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	props: {
		Preferen_type: {
			type: String,
			default: "1"
		}
	}
}
</script>


<style lang="stylus" scoped>
html, body, div, p, i, span, ul, li {
	margin: 0;
	padding: 0;
}

body {
	background-color: #eee;
}

ul {
	list-style: none;
}

.stamp_list {
	margin: 20px auto;
	width: 100%;
}

.stamp {
	height: 125px;
	margin-bottom: 20px;
	position: relative;
	box-sizing: border-box;
	border-radius: 5px;
}

.stamp_inner {
	height: 125px;
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
	position: relative;
	border-radius: 5px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.stamp_left {
	width: 64%;
	background: #ffffff;
}

.stamp_left .box {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 78px;
	height: 81px;
}

.stamp_right {
	width: 36%;
	background: #fc9153;
}

.circle_list {
	position: absolute;
	top: 5px;
}

.circle_list1 {
	left: -5px;
}

.circle_list2 {
	right: -5px;
}

// .circle_list2:after{
// content: '';
// position: absolute;
// top: 0;
// bottom: 0;
// left: 6px;
// right: -5px;
// z-index: 1;
// background-color: #eee;
// }
.circle_list>li {
	background-color: #eee;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin-bottom: 5px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2) inset;
}
.coupon-template-two
	.right-content-box
		display flex
		justify-content center
		color #fff
		box-sizing border-box		
		.sale
			line-height 125px
			font-weight 600
			font-size 42px
			box-sizing border-box			
			.unit
				line-height 125px
				font-size 20px
				box-sizing border-box
				font-weight 500

.coupon-template-two
	.left-content
		padding 0 12px
		box-sizing border-box
		.activity-title
			font-weight 600
			font-size 20px
			line-height 60px
			text-align left
			color #3a3a3a
		.activity-content
			text-align left
			font-size 16px
			line-height 40px
			color #3a3a3a
		.activity-period
			text-align left
			font-size 14px
			line-height 20px
			color #5b5b5b
</style>



