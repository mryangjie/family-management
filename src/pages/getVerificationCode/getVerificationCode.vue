<template>
  <div class="page-wrapper">
    <vue-particles></vue-particles>
    <div class="middle-wrapper">
      <div class="middle-wrapper-left">
        <div class="img-t1"></div>
        <div class="img-t2"></div>
      </div>
      <div class="middle-wrapper-right">
        <div class="m-right-tit">
          <img src="../../assets/images/zhaohuimima.png" alt="">
        </div>
        <div class="m-right-content">
          <div class="toLogin" @click="goLogin"><i class="el-icon-arrow-left"></i>返回登录</div>
          <el-steps :active="1" align-center>
            <el-step title="输入登录账号"></el-step>
            <el-step title="输入验证码"></el-step>
            <el-step title="设置新密码"></el-step>
          </el-steps>
          <el-form class="p-form reset-form-input reset-form-required" :model="passwordForm" :rules="rules"
                   ref="passwordForm">
            <el-form-item label="验证账号" prop="password">
              <el-input placeholder="请输入收到的验证码" v-model="passwordForm.verCode"></el-input>
            </el-form-item>
          </el-form>
          <div class="submit-line">
            <el-button class="submit-btn" type="primary" @click="submitForm('passwordForm')">下一步</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import VueParticles from '@/components/VueParticles.vue';
    import {mapGetters, mapActions} from 'vuex';
    import {checkTel, isEmail} from '@/store/utils/validate.js'

    export default {
        data() {
            return {
                passwordForm: {
                    username:'',
                    verCode: ''
                },
                rules: {
                    verCode: [
                        {required: true, message: '请输入收到的验证码不能为空', trigger: 'blur'},
                    ]
                }
            }
        },
        components: {
            VueParticles
        },
        methods: {
            ...mapActions(['getFindPwdVerify']),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.getFindPwdVerify({
                            username:this.passwordForm.username,
                            verification_code: this.passwordForm.verCode
                        })
                            .then(res => {
                                if (res.code == '200') {
                                    this.$message({
                                        message: '验证码正确',
                                        type: 'success'
                                    })
                                    this.$router.push({
                                        name: 'setPassword',
                                        params: {
                                            code: res.data.code.code
                                        }
                                    })
                                } else {
                                    this.$message.error(res.msg);
                                }
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            goLogin() {
                this.$router.push({
                    name: 'login'
                })
            },
        },
        async created(){
            this.passwordForm.username = this.$route.params.username;
            // await this.getProvinces();
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
  @import '@/assets/scss/config.scss';

  .middle-wrapper-right {
    position: relative;

    .toLogin {
      position: absolute;
      top: 30px;
      left: 30px;
      font-size: 12px;
      cursor: pointer;
      color: $submit_btn_color;

      &:hover {
        color: $submit_btn_color_active
      }
    }

    .m-right-tit {
      img {
        width: 130px
      }
    }

    .m-right-content {
      .el-step__title {
        font-size: 12px;
      }

      .p-form {
        margin-top: 20px;
      }

    }

  }

</style>
