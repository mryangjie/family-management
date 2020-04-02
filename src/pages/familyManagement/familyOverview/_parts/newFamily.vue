<template>
    <div class="newFamily-wrapper">
        <el-form class="reset-form-input reset-form-required reset-form-label"
            :model="familyForm"
            :rules="rules"
            ref="familyForm">
            <div class="dialog-main">
                <h1 class="dialog-main-titles">请输入您的家族名称</h1>
                <div class="dialog-main-bg">
                    <div class="dialog-main-txt">
                        <p>输入家族名称之后即可创建</p>
                        <p>之后将创建独一无二的家族码</p>
                        <p>并开启「家族总览」「世系表」「家传」功能</p>
                    </div>
                    <div class="dialog-main-inputs">

                        <el-form-item label="请输入家族名称"
                            prop="familyName">
                            <el-input placeholder="请输入家族名称"
                                v-model="familyForm.familyName"></el-input>
                        </el-form-item>
                        <div class="dialog-main-generation">
                            <span>我是家族</span>

                            <el-form-item label="请输入数字"
                                class="short-input-num"
                                prop="num">
                                <el-input placeholder="请输入数字"
                                    v-model="familyForm.num"
                                    class=""></el-input>
                            </el-form-item>
                            <span>代（若不输入默认为一代）</span>
                        </div>
                    </div>
                    <c-button type="primary"
                        @click="creatFamily('familyForm')"
                        :wh="120"
                        class="creat-family-btn">创建家族</c-button>
                </div>
            </div>

        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            familyForm: {
                familyName: '',
                num: '',
            },
            rules: {
                familyName: [{
                    required: true, message: '请输入家族名称', trigger: 'blur'
                }],
                num: [{
                    required: true, message: '请输入数字', trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        creatFamily(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('creatSubmit',this.familyForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
}
</script>

<style lang="scss">
.newFamily-wrapper {
    .short-input-num {
        width: 65px;
        display: inline-block;
        .el-input>input{
            text-align: center;
        }
    }
}
</style>