<script type="text/javascript">
import { privilegeRoute,privilegeIcon } from './privilege-route.js';
	export default {
    props: ['menus'],
		data(){
			return {
				privilegeRoute,
				privilegeIcon,
				userName:'刘爱国'
			}
		},
    	computed: {
      		defaultActive: function(){

				// let active = '/familyOverview'
				// return active
      		}

    },
	methods: {
      	handleOpen(key, keyPath) {},
      	handleClose(key, keyPath) {}
    },
}
</script>
<template>
	<div class="home-wrapper-slider">
		<div class="online-show">
			<div class="online-img">
				<img src="../../../assets/images/familyManagement/tx.png" alt="">
			</div>
			<div class="online-info">
				<div class="info-box">
					<p class="info-surname">刘氏家族</p>
					<p class="info-no">ZP-52563</p>
				</div>
			</div>
			<i class="online-icon-arrow el-icon-caret-bottom"></i>
		</div>
		<el-menu
			:default-active="defaultActive"
			:unique-opened="true"
			:router="true"
			:class="{'slider-menu': true}"
			@open="handleOpen"
			@close="handleClose">
			<template v-for="menu in menus">
				<el-menu-item :index="privilegeRoute[menu.resKey]||'/'" :key="menu.resourcesName">
					<i class="slider-icon" :class="`iconfont ${privilegeIcon[menu.resKey]}`"></i>
					<span slot="title" class="nav-item-name">{{ menu.resourcesName  }}</span>
				</el-menu-item>
      		</template>
		</el-menu>
		<div class="online-control">
			<div class="online-img">
				<div class="online-img-user">
					<img src="../../../assets/images/familyManagement/tx.png" alt="">
				</div>
				<div class="online-img-name">
					{{userName}}
				</div>
			</div>
			<div class="online-ctrl">
				退出登录
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	.slider-icon{
		margin-right:10px;
	}
	
</style>
