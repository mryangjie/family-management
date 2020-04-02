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
                    <img src="../../assets/images/denglu.png" alt="">
                </div>
                <div class="m-right-content">
                    <el-form class="reset-form-input reset-form-required" :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item  label="手机号" prop="phoneCode">
                            <el-input v-model.trim="loginForm.phoneCode" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                         <el-form-item  label="密码" prop="password">
                            <el-input v-model.trim="loginForm.password"  placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <div class="submit-line">
                            <el-button class="submit-btn" type="primary" @click="submitForm('loginForm')">登 陆</el-button>
                        </div>
                        <div class="help-line">
                            <span class="help-line-l" @click="goRegister">注册新账号</span>
                            <span class="help-line-r" @click="forgetPassword">忘记密码</span>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import VueParticles from '@/components/VueParticles.vue';
import { mapGetters, mapActions } from 'vuex';
import { checkTel,isEmail} from '@/store/utils/validate.js'
import mixinConfig from '@/mixins/mixin.config.js'

    export default {
        mixins: [mixinConfig],
        data(){
            return{
                loginForm:{
                    phoneCode:"",
                    password:""
                },
                rules:{
                    phoneCode:[
                         { required: true, message: '请输入手机号', trigger: 'blur' },
                    ],
                    password:[
                         { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
       },
       components:{
           VueParticles
        },
        methods: {
            ...mapActions(['getLogin']),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(!checkTel(this.loginForm.phoneCode)){
                            this.$message({
                                message:'请输入正确的手机号',
                                type:'warning'
                            })
                            return
                        }
                        let o = {
                            username: this.loginForm.phoneCode,
                            password: this.loginForm.password
                        }
                        this.getLogin(this.getFormadataParams(o)).then( res=>{
                            if(res.code=='407'||res.code=='0'){
                                this.$message({
                                    message:'登陆成功正在进入家族管理系统',
                                    type:'success'
                                })
                                this.$router.push({name:'familyOverview',params:{code:res.code} })

                            }else{
                                this.$message.error(res.msg);
                            }
                        })


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            goRegister(){
                this.$router.push({name:'register'})
            },
            forgetPassword(){
                this.$router.push({name:'retrievePassword'})
            }
        },
       mounted(){

       }
    }
</script>

<style lang="scss" scoped>
.middle-wrapper-right{
    .m-right-tit{
        img{
            width: 70px
        }
    }
    .help-line{
        font-size: 12px;
        cursor: pointer;
        .help-line-l{
            float: left;
            color: #1781b5;
            &:hover{
                color:#1893d0;
            }
        }
        .help-line-r{
            float: right;
            color: #acacac;
        }
    }
}

</style>
