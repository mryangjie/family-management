<template>
  <div class="common-wrapper">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="member-manage-left">
          <h5 class="group-list">分组列表</h5>
          <i class="el-icon-plus group-list-add"></i>
        </div>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#999">
          <el-menu-item index="1" class="center">
            <span slot="title">族长</span>
          </el-menu-item>
          <el-menu-item index="2" class="center">
            <span slot="title">管理员</span>
          </el-menu-item>
          <el-menu-item index="3" class="center">
            <span slot="title">家族成员</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="member-manage-right">
          <div class="chiefs-details">
            <div class="chiefs-details-top">
              <span class="chiefs-details-title">族长详情</span>
              <el-button class="chiefs-details-edit">编辑</el-button>
            </div>
            <el-row :gutter="20">
              <el-col :span="5">
                <div class="chiefs-details-item">
                  <img src="/static/img/tx.e7e340a.png" class="chiefs-details-photo">
                  <span class="chiefs-details-name">刘振伟</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="chiefs-details-item">
                  <img src="/static/img/tx.e7e340a.png" class="chiefs-details-photo">
                  <span class="chiefs-details-name">刘爱国</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="function-power">
            <div class="function-power-details">
              <span class="chiefs-details-title">功能权限</span>
              <span class="function-power-con">全家族</span>
            </div>
          </div>
          <div class="data-power">
            <div class="data-power-title">数据权限</div>
            <div class="data-power-details">
              <span class="data-power-name">世系表模块</span>
              <span class="data-power-con">世系表菜单；编辑人员；删除人员；查看详情</span>
            </div>
            <div class="data-power-details">
              <span class="data-power-name">个人中心模块</span>
              <span class="data-power-con">所有功能</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss" scoped>
  .el-menu{
    border: none;
  }
  .member-manage-left{
    overflow: hidden;
    .group-list{
      color: #666666;
      font-size: 14px;
      float: left;
      margin-top: 0;
    }
    .group-list-add{
      color: #999;
      float: right;
    }
  }
  .member-manage-right{
    border-left: solid 1px #e6e6e6;
    padding-left: 30px;
    .chiefs-details-title{
      color: #666666;
      font-size: 18px;
      float: left;
    }
    .chiefs-details{
      border-bottom: #EBEBEB solid 1px;
      padding-bottom: 30px;
      .chiefs-details-top{
        margin-bottom: 30px;
        overflow: hidden;
        .chiefs-details-edit{
          font-size: 12px;
          padding: 4px 10px;
          margin-left: 15px;
          border-radius: 0;
          float: left;
          border-color: #D8D8D8;
          color: #40382C;
        }
      }
      .chiefs-details-item{
        overflow: hidden;
        .chiefs-details-photo{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          float: left;
          margin-right: 15px;
        }
        .chiefs-details-name{
          line-height: 50px;
          color: #332A1C;
        }
      }
    }
    .function-power{
      border-bottom: #EBEBEB solid 1px;
      padding: 30px 0;
      overflow: hidden;
      .function-power-con{
        float: left;
        margin-left: 50px;
        padding-top: 2px;
        font-weight: bold;
      }
    }
    .data-power{
      padding-top:30px;
      .data-power-title{
        color: #666666;
        font-size: 18px;
        margin-bottom: 25px;
      }
      .data-power-details{
        margin-bottom: 15px;
        .data-power-name{
          font-weight: bold;
        }
        .data-power-con{
          margin-left: 50px;
        }
      }
    }
  }
  .center{
    text-align: center;
  }
</style>
