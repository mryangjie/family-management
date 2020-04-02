<template>
      <!-- 弹框 -->
      <!-- <el-form class="" :model="" :rules="rules" ref="">
        <h2 class="family-overview-title">请输入你的家族名称</h2>
        <el-row class="init-dialog-wrapper">
          <el-col :span="9" class="init-dialog-content">
            <div></div>
          </el-col>
        </el-row>
      </el-form> -->
  <div>
    <el-row :gutter="30" class="detailed-news-wrapper" >
      <el-col :span="6" class="detailed-news-item">
        <div class="detailed-news-content el-row">
            <el-col :span="12" class="detailed-news-num">186</el-col>
            <el-col :span="12" class="detailed-news-title">总人数</el-col>
        </div>
      </el-col>
      <el-col :span="6" class="detailed-news-item">
        <div class="detailed-news-content">
          <el-col :span="12" class="detailed-news-num c-1781B5">160</el-col>
          <el-col :span="12" class="detailed-news-title c-1781B5">已注册</el-col>
        </div>
      </el-col>
      <el-col :span="6" class="detailed-news-item">
        <div class="detailed-news-content">
          <el-col :span="12" class="detailed-news-num c-659AB5">26</el-col>
          <el-col :span="12" class="detailed-news-title c-659AB5">未注册</el-col>
        </div>
      </el-col>
      <el-col :span="6" class="detailed-news-item">
        <div class="detailed-news-content">
          <el-col :span="12" class="detailed-news-num c-999">6</el-col>
          <el-col :span="12" class="detailed-news-title c-999">已故人士</el-col>
        </div>
      </el-col>
    </el-row>
    <div class="family-instruction-wrapper">
      <p class="family-instruction-title">刘氏家训</p>
    </div>
  </div>
</template>
<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    // .family-overview-title{
    //     position: absolute;
    //     top: 130px;
    //     left: 0px;
    //     width: 100%;
    //     text-align: center;
    // }
    .detailed-news-wrapper{
        height: 60px;
        margin: 30px  15px 30px 15px!important;
        .detailed-news-item{
            height: 100%;
            .detailed-news-content{
                height: 100%;
                border-radius: 3px;
                background: #fff;
                .detailed-news-num{
                  height: 100%;
                  line-height: 60px;
                  text-align: center;
                  font-size: 26px;
                  font-weight: bold;
                }
                .detailed-news-title{
                  height: 100%;
                  line-height: 60px;
                  text-align: center;
                  font-size: 16px;
                }
                .c-1781B5{
                  color: #1781B5;
                }
                .c-659AB5{
                  color: #659AB5;
                }
                .c-999{
                  color: #999;
                }
            }
        }
    }
    .family-instruction-wrapper{
        background: #fff;
        margin: 0 30px;
        .family-instruction-title{
            font-size: 24px;
            font-weight: 400;
            text-align: center;
            line-height: 60px;
        }
    }
</style>
