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
                    <img src="../../assets/images/wanshanxinxi.png" alt="">
                </div>
                <div class="m-right-content">
                    <el-form class="info-line-block reset-form-input reset-form-required" :model="completForm" :rules="rules" ref="completForm">
                        <div class="info-line">
                            <el-form-item label="姓氏" class="line-block" prop="surname">
                                <el-input placeholder="请输入您的姓氏" v-model="completForm.surname"></el-input>
                            </el-form-item>
                            <el-form-item label="名字" class="line-block margin-block" prop="name">
                                <el-input placeholder="请输入您的名字" v-model="completForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" class="line-block" prop="sex">
                                <el-select placeholder="请选择您的性别" v-model="completForm.sex">
                                    <el-option
                                        v-for="item in sexList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="info-line">
                            <el-form-item label="出生年月" class="line-block reset-date-width" prop="birthday">
                                <el-date-picker
                                v-model="completForm.birthday"
                                type="date"
                                :clearable=false
                                prefix-icon="el-icon-arrow-down"
                                placeholder="选择出生年月">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="info-line">
                            <el-form-item label="现居地址" class="line-block" prop="province_id">
                                <el-select placeholder="选择省" v-model="completForm.province_id" @change="selectProvice">
                                    <el-option
                                        v-for="item in provincesList"
                                        :key="item.provinceid"
                                        :label="item.province"
                                        :value="item.provinceid">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label=" " class="line-block margin-block" prop="city_id">
                                <el-select placeholder="选择市" v-model="completForm.city_id" @change="selectCite">
                                    <el-option
                                        v-for="item in citiesList"
                                        :key="item.cityid"
                                        :label="item.city"
                                        :value="item.cityid">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label=" " class="line-block" prop="area_id">
                                <el-select placeholder="选择县/区" v-model="completForm.area_id">
                                    <el-option
                                        v-for="item in areasList"
                                        :key="item.areaid"
                                        :label="item.area"
                                        :value="item.areaid">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>

                        <div class="submit-line">
                            <el-button class="submit-btn" type="primary" @click="submitForm('completForm')">完成注册</el-button>
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
    export default {
        data() {
            return {
                completForm: {
                    username:'',
                    password:'',
                    surname:'',
                    name:'',
                    verification_code:'',
                    sex:'0',
                    birthday:'',
                    province_id:'',
                    city_id:'',
                    area_id:''
                },
                sexList:[
                    { label:'男',value: '1'},
                    { label:'女',value: '0'},
                ],
                rules:{
                    surname:[
                         { required: true, message: '请输入姓氏', trigger: 'blur' },
                    ],
                    name:[
                         { required: true, message: '请输入姓名', trigger: 'blur' },
                    ],
                    birthday:[
                         { required: true, message: '请选择出生日期', trigger: 'blur' },
                    ],
                    province_id:[
                         { required: true, message: '请选择省', trigger: 'blur' },
                    ],
                    city_id:[
                         { required: true, message: '请选择市', trigger: 'blur' },
                    ],
                    area_id:[
                         { required: true, message: '请选择县/区', trigger: 'blur' },
                    ],
                }
            }
        },
        components:{
           VueParticles,
        },
        computed: {
            ...mapGetters(['provincesList','citiesList','areasList']),
            params(){
               return{
                   confirm_password: this.completForm.password,
                   birthday: new Date(this.completForm.birthday).getTime() || '',
                   inviter_id:'',
                   industry_id:'',
                   position:''
               }
           }
        },
        methods: {
            ...mapActions(['getProvinces','getCities','getAreas','getRegister']),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       this.getRegister(Object.assign(this.completForm,this.params)).then( res=>{
                           if( res.code=='200'){
                               this.$message({
                                   message:'注册成功',
                                   type:'success'
                               })
                                this.$router.push({name:'login'})
                           }else{
                                this.$message({
                                   message:res.msg,
                                   type:'error'
                               })
                           }
                       })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            selectProvice(id){
                this.completForm.city_id = '';
                this.completForm.area_id = '';
                this.getCities({provinceId:id})
            },
            selectCite(id){
                this.completForm.area_id = '';
                this.getAreas({cictyId:id})
            }
        },
        async created(){
            this.completForm.username = this.$route.params.phoneCode;
            this.completForm.password = this.$route.params.password;
            this.verification_code = this.$route.params.verCode;

            await this.getProvinces();
        }
    }
</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
.middle-wrapper-right{
    .m-right-tit{
        img{
            width: 145px
        }
    }
    .m-right-content{
        .info-line-block{
            .info-line{
                @include flexbox;
                .margin-block{
                    margin: 0 15px;
                }
            }
         
            .reset-date-width{
                .el-date-editor.el-input, .el-date-editor.el-input__inner{
                    width: 340px
                }
                .el-input--prefix .el-input__inner{
                    padding-left:0;
                }
                .el-input__prefix{
                    left: 310px;
                }
            }
        }
    }
}
</style>