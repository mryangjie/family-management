<template>
    <div class="dialog-main-input hasFamilyNum">
        <div class="dialog-main">
            <h1 class="dialog-main-titles">请输入您的家族编号</h1>
            <div class="dialog-main-bg dialog-family-bg">
                <el-row class="join-family">
                    <el-col :span="12"
                        class="join-family-left">
                        <div class="dialog-main-txt">
                            <p>输入您的家族编号，即可加入</p>
                        </div>
                        <div class="dialog-main-inputs">
                            <el-form class="reset-form-input1 reset-form-input reset-form-required reset-form-label search-code"
                                :model="familyForm"
                                :rules="rules"
                                ref="familyForm">
                                <el-form-item label="请输入家族编号"
                                    prop="familyNum">
                                    <el-input placeholder="请输入家族编号"
                                        v-model="familyForm.familyNum"
                                        class="el-input__inner"></el-input>
                                </el-form-item>
                                <i class="el-icon-search"
                                    @click="searchCode"></i>
                            </el-form>
                        </div>
                    </el-col>
                    <el-col :span="12"
                        class="join-family-right">
                        <div class="join-family-rightCon">
                            <img src="/static/img/tx.e7e340a.png">
                            <div class="join-family-rightWirte">
                                <p>{{setUserObj.code?'已查询':'未查询'}}</p>
                                <p>{{setUserObj.code}}</p>
                            </div>
                        </div>
                        <p class="join-family-rightTip">{{noSearchTip?'未查到该编号家族':'输入家族编号后可查看家族简介'}}</p>
                    </el-col>
                </el-row>
                <c-button type="primary"
                    :wh='130'
                    @click="creatFamily('familyForm')"
                    class="creat-family-btn">确认并加入</c-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import mixinConfig from '@/mixins/mixin.config.js'
export default {
    mixins: [mixinConfig],
    data() {
        return {
            setUserObj: {},
            noSearchTip: false,
            familyForm: {
                familyNum: ''
            },
            rules: {
                familyNum: [
                    { required: true, message: '请输入家族编号', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        ...mapActions(['familyByCode', 'japply']),
        creatFamily(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(!this.setUserObj.id){
                        this.$message.warning('请先查询后再加入家族')
                        return
                    }
                    this.$prompt('请输入备注', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputErrorMessage: '输入不能为空',
                        inputValidator: (value) => {
                            if (!value) {
                                return '输入不能为空'
                            }
                        },
                    }).then(({ value }) => {
                        let o = {
                            family_id: this.setUserObj.id,
                            remark: value
                        }
                        this.japply(this.getFormadataParams(o)).then(res => {
                            if (res.code=='200') {
                                this.$message.success(res.msg)
                                this.$emit('cancel-hasFamilyNum')
                            }else{
                                this.$message.error(res.msg)
                            }
                        })

                    }).catch(() => {
                    });

                } else {
                    return false;
                }
            });
        },
        goBack() {
            this.$router.push({ name: 'familyOverview' })
        },
        searchCode() {
            if (!this.familyForm.familyNum) {
                this.$message.warning('请输入家族编号后查询!')
                return
            }
            this.familyByCode({
                code: this.familyForm.familyNum
            }).then(res => {
                if (res.code == '200') {

                    this.setUserObj = res.data;
                    if(!res.data.code){
                        this.noSearchTip = true
                    }
                } else {
                    this.$message.warning(res.msg)
                }
            })
        }
    },
    created () {
        this.noSearchTip = false
    },
}
</script>

<style lang="scss">
.hasFamilyNum {
    .search-code {
        position: relative;
        .el-icon-search {
            position: absolute;
            right: 0px;
            top: 18px;
            font-size: 16px;
            color: #a7a1a1;
        }
    }
}
</style>