<script>
    import { mapGetters, mapActions } from 'vuex'
    import slider from './slider/slider.vue';
    import { menus } from './menus.js'; 
    export default {
        name: 'app',
        components: {
            slider
        },
        data() {
            return {
                leftMenus: []
            }
        },
        async created() {
            this.leftMenus = menus.data.suns 
         
        }
    }
</script>
<template>
    <el-row class="home-wrapper">
        <slider :menus="leftMenus"></slider>
        <div class="home-wrapper-content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </el-row>
</template>
<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    .nav-item-name-abcd { padding-left: 6px;}
</style>
