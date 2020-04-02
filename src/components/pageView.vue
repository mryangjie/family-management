<script type="text/javascript">

	export default {
		name: 'page-view',
		props: {
			tofromOver: {
				type: Boolean,
				required: true
			}
		}
	}
</script>
<template>
	<div class="page-view">
		<transition name="fade">
			<div class="loading-wrap" v-if="!tofromOver">	
				<div class="el-loading-spinner">
		      <svg viewBox="25 25 50 50" class="circular">
		        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
		      </svg>
		      <p>拼命加载中...</p>
		    </div>
			</div>
		</transition>
    <slot></slot>
    
	</div>
</template>
<style lang="scss">
	.page-view{
		position: relative;	width: 100%; height: 100%; padding: 15px;
	}
	.loading-wrap{
	 	position: absolute; top: 0; left: 0;	width: 100%; height: 100%; background-color: #EEF4F9; z-index: 9998
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>