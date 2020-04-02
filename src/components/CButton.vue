<script type="text/javascript">
	export default {
		name: 'c-button',
		methods: {
			handleClick(){
				if(this.to) {
					this.$router.push(this.to);
				}else {
					this.$emit('click');
				}
			}
		},
		props:['type', 'to','disabled']
	}
</script>
<template>
	<span v-if="disabled==true" class="c-btn disableButton" :class="{'primary':type =='primary'}"><slot></slot></span>
	<span v-else class="c-btn " :class="{'primary':type =='primary'}" @click="handleClick"><slot></slot></span>
</template>

<style lang="scss">
@import '../assets/scss/config.scss';
.c-btn{
	display: inline-block; 
	padding-left: 10px; 
	padding-right: 10px; 
	height: 30px; 
	text-align: center; 
	line-height: 27px; 
	border-radius: 4px; 
	border: 1px solid #bfcbd9; 
	color: #1F2D3D; 
	cursor: pointer;
	&.primary{background-color: #20a0ff; color: #fff; border-color: #20a0ff;}
}
  .disableButton{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
</style>
