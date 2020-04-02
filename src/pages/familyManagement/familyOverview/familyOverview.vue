<template>
    <div class="page-view">
<!--      登陆后选择家族-->
      <filterBg :isFilter='isFilter' v-if="isFilter"></filterBg>
      <selectFamily></selectFamily>
<!--      登陆后已有家族-->
<!--      <homeAfterLogin></homeAfterLogin>-->
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    import filterBg from './_parts/filterBg';
    import selectFamily from './_parts/selectFamily'; //登陆后选择家族
    import homeAfterLogin from './_parts/homeAfterLogin'; //登陆后已有家族
    export default {
        data() {
            return {
                code:"", // 407无家族 200有家族
                isFilter: true

            }
        },
        components:{
            filterBg,
            selectFamily, //登陆后选择家族
            homeAfterLogin //登陆后已有家族
        },
        methods: {
            
        },
        created () {

            this.code = this.$route.params.code
            console.log(this.code)
        },
    }
</script>

<style lang="scss" scoped>


</style>
