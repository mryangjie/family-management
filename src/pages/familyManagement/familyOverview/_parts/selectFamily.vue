<template>
    <div class="init-dialog-wrapper">
      <div class="init-dialog-content">
        <div class="dialog-tit">请选择您的家族身份</div>
        <el-row :gutter="50" class="dialog-main-wrapper">
          <el-col :span="8">
            <div class="dialog-main-item">
              <h1 class="dialog-main-title">家族编谱人员</h1>
              <div class="dialog-main-txt">
                <p>选择后,您将成为家族管理员</p>
                <p>可以进行家谱的上传、编辑、备份</p>
                <p>并邀请家族成员加入</p>
              </div>
              <div class="dialog-main-input">
                <el-form class="reset-form-input reset-form-required reset-form-label" :model="familyForm" :rules="rules" ref="familyForm">
                  <el-button class="dialog-main-btn">创建一个家族</el-button>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="dialog-main-item">
              <h1 class="dialog-main-title">家族成员(有编号)</h1>
              <div class="dialog-main-txt">
                <p>输入家族唯一编号后可加入</p>
                <p>会根据注册信息进行匹配</p>
                <p>之后也可以进行个人信息的编辑</p>
              </div>
              <div class="dialog-main-input">
                <el-form class="reset-form-input reset-form-required reset-form-label" :model="familyForm" :rules="rules" ref="familyForm">
                  <el-button class="dialog-main-btn">输入家族编号</el-button>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="dialog-main-item">
              <h1 class="dialog-main-title">家族成员(无编号)</h1>
              <div class="dialog-main-txt">
                <p>根据已经注册的信息进行匹配</p>
                <p>查寻到相匹配的家族</p>
                <p>您可以选择并申请加入</p>
              </div>
              <div class="dialog-main-input">
                <el-form class="reset-form-input reset-form-required reset-form-label" :model="familyForm" :rules="rules" ref="familyForm">
                  <el-button class="dialog-main-btn">查询我的家族</el-button>
                </el-form>
              </div>
            </div>
          </el-col>
        </el-row>
              <!--        <div class='dialog-main'>-->
<!--          <div class="dialog-main-txt">-->
<!--            <p>输入家族名称之后即可创建</p>-->
<!--            <p>之后将创建独一无二的家族码</p>-->
<!--            <p>并开启「家族总览」「世系表」「家传」功能</p>-->
<!--          </div>-->
<!--          <div class="dialog-main-input">-->
<!--            <el-form class="reset-form-input reset-form-required reset-form-label" :model="familyForm" :rules="rules" ref="familyForm">-->
<!--              <el-form-item label="请输入家族名称" prop="familyName">-->
<!--                <el-input placeholder="请输入家族名称" v-model="familyForm.familyName"></el-input>-->
<!--              </el-form-item>-->
<!--            </el-form>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="dialog-footer">-->
<!--          <div class="footer-cancel">上一步</div>-->
<!--          <div class="footer-created">-->
<!--            <el-button type="primary"  @click="creatFamily('familyForm')">创建家族</el-button>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isFilter: true,
                dialogVisible: true,
                familyForm:{
                    familyName:''
                },
                rules: {
                    familyName: [{
                        required: true, message: '请输入家族名称', trigger: 'blur'
                    },
                    ]
                }
            }
        },
        components:{

        },
        methods: {
            creatFamily(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        console.log('创建接口')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/config.scss';
  .init-dialog-wrapper{
      width: 100%;
      height: 100%;
      position: relative;
      .init-dialog-content{
          width: 1100px;
          height: 500px;
          margin-left: 0px;
          border-radius: 5px;
          padding: 30px;
          .dialog-tit{
              margin-top: 10px;
              text-align: center;
              font-weight: 500;
              font-size: 24px;
              letter-spacing: 1px;
          }
          .dialog-main-wrapper{
              margin: 70px 0 30px!important;
              .dialog-main-item{
                  background: #fff;
                  box-shadow: 0px 0px 8px #cacaca;
                  border-radius: 3px;
                  padding: 30px;
                  .dialog-main-title{
                      font-size: 20px;
                      font-weight: 500;
                      margin: 0 0 30px 0;
                  }
                  .dialog-main-txt{
                      p{
                          margin: 0 0 10px 0;
                      }
                  }
                  .dialog-main-input{
                      .dialog-main-btn{
                          margin: 20px 55px;
                          background: #1781B5;
                          border: #1781B5 solid 1px;
                          color: #fff;
                      }
                  }
              }
          }
          /*.dialog-main{
              .dialog-main-input /deep/ .el-input__inner{
                  background-color: transparent!important;
              }
          }
          .dialog-footer{
              padding: 0 30px;
              @include flexbox;
              @include flexAverage;
              .footer-cancel{
                  @include flexbox;
                  @include flexVeriAverage;
                  color:$submit_btn_color;
                  cursor: pointer;
              }
              .footer-created button{
                  padding: 7px 30px;
                  background-color: $submit_btn_color;
                  &:hover{
                      background-color: $submit_btn_color_active;
                  }
              }
          }*/
      }
  }
</style>
