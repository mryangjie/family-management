<template>
  <div class="root-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/scss//main.scss'
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .root-wrap{ width: 100%; height: 100%; }
  //userCenter-tab style reset
  .user-center-tab{
      .el-tabs__nav-wrap{
          background: #fff!important;
          height: 50px;
          line-height: 50px;
          .el-tabs__active-bar{
              margin-left: 20px;
              width: 75!important;
          }
          #tab-first{
              margin-left: 20px;
          }
          .el-tabs__item{
            font-size: 16px;
          }
      }
      .el-tabs__nav-wrap::after{
          background-color: #fff;
      }
  }
</style>
