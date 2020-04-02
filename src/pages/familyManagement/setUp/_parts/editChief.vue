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
              <span class="chiefs-details-title">编辑族长</span>
            </div>
            <div class="chiefs-details-box">
              <div class="chiefs-details-item" v-for="(d,index) in counter" :key="index">
                <dom></dom>
              </div>

<!--              <el-col :span="5">-->
<!--                <div class="chiefs-details-item">-->
<!--                  <img src="/static/img/tx.e7e340a.png" class="chiefs-details-photo">-->
<!--                  <span class="chiefs-details-name">刘振伟</span>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="5">-->
<!--                <el-button class="chiefs-details-edit" @click="add">添加</el-button>-->
<!--              </el-col>-->
            </div>
            <el-button class="chiefs-details-edit" @click="add">添加</el-button>
          </div>
          <div class="function-power">
            <div class="function-power-details">
              <span class="chiefs-details-title">功能权限</span>
              <div class="function-power-con">
                <el-radio v-model="radio" label="1" class="function-power-radio">全家族</el-radio>
                <el-radio v-model="radio" label="2" class="function-power-radio">
                  自定义：向上
                  <el-input v-model="input" placeholder="请输入内容" class="function-power-input"></el-input>
                  代及以下
                </el-radio>
              </div>
            </div>
          </div>
          <div class="data-power">
            <div class="data-power-title">数据权限</div>
            <div class="data-power-details">
              <span class="data-power-name">世系表模块</span>
              <div class="data-power-con">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">所有功能</el-checkbox>
                <el-checkbox-group v-model="checkedBloodlines" @change="handleCheckedBloodlinesChange" class="data-power-checkbox">
                  <el-checkbox v-for="bloodline in bloodlines" :label="bloodline" :key="bloodline">{{bloodline}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="data-power-details">
              <span class="data-power-name">个人中心模块</span>
              <div class="data-power-con">
                <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">所有功能</el-checkbox>
                <el-checkbox-group v-model="checkedCenters" @change="handleCheckedCentersChange" class="data-power-checkbox">
                  <el-checkbox v-for="center in centers" :label="center" :key="center">{{center}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
          <div class="chiefs-details-bottom">
            <el-button class="chiefs-details-preserve">保存</el-button>
            <el-button class="chiefs-details-cancel">取消</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import Vue from 'vue';
    const bloodlineOptions = ['世系表菜单', '编辑人员', '删除人员', '查看详情'];
    const centerOptions = ['个人中心菜单'];
    Vue.component('dom', {
        template:'<div class="chiefs-details-item-con" style="overflow: hidden">\n' +
                '<img src="/static/img/tx.e7e340a.png" style="width: 50px;height: 50px;border-radius: 50%;margin-right:15px;float: left;">\n' +
                '<span class="chiefs-details-name" style=" line-height: 50px;color: #332A1C;float: left">刘振伟</span>\n' +
            '</div>'
    })
    export default {
        data() {
            return {
                counter: [],
                radio: '1',
                input: '2',
                checkAll: false,
                checkedBloodlines: ['世系表菜单'],
                bloodlines: bloodlineOptions,
                isIndeterminate: true,
                checkAll1: false,
                checkedCenters: ['个人中心菜单'],
                centers: centerOptions,
                isIndeterminate1: true
            }
        },
        methods: {
            add(){
                this.counter.push({});
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleCheckAllChange(val) {
                this.checkedBloodlines = val ? bloodlineOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedBloodlinesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.bloodlines.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.bloodlines.length;
            },
            handleCheckAllChange1(val) {
                this.checkedCenters = val ? centerOptions : [];
                this.isIndeterminate1 = false;
            },
            handleCheckedCentersChange(value) {
                let checkedCount1 = value.length;
                this.checkAll1 = checkedCount1 === this.centers.length;
                this.isIndeterminate1 = checkedCount1 > 0 && checkedCount1 < this.centers.length;
            },
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
      overflow: hidden;
      .chiefs-details-top{
        margin-bottom: 30px;
        overflow: hidden;
      }
      .chiefs-details-box{
        overflow: hidden;
        float: left;
        .chiefs-details-item{
          width: 115px;
          height: 55px;
          float: left;
          margin-right: 35px;
          overflow: hidden;
        }
      }
      .chiefs-details-edit{
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 0;
        float: left;
        border-color: #1781B5;
        color: #1781B5;
        margin: 14px 0;
        margin-left: 15px;
      }
    }
    .function-power{
      border-bottom: #EBEBEB solid 1px;
      padding: 30px 0;
      overflow: hidden;
      .chiefs-details-title{
        line-height: 40px;
      }
      .function-power-con{
        float: left;
        margin-left: 50px;
        .function-power-radio{
          .function-power-input{
            width: 12%;
          }
        }
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
        overflow: hidden;
        .data-power-name{
          font-weight: bold;
          float: left;
        }
        .data-power-con{
          margin-left: 50px;
          float: left;
          .data-power-checkbox{
            display: inline-block;
            margin-left: 20px;
          }
        }
      }
    }
    .chiefs-details-bottom{
      margin-top: 100px;
      .chiefs-details-preserve{
        background: #5BA8FF;
        color: #fff;
        border-color: #5BA8FF;
        padding: 6px 12px;
      }
      .chiefs-details-cancel{
        border: none;
        padding: 6px 12px;
        color: #009999;
      }
    }
  }
  .center{
    text-align: center;
  }
</style>
