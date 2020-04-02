<template>
    <div class="init-dialog-wrapper">
        <div class="init-dialog-content">
            <div class="dialog-tit">请选择您的家族身份</div>
            <el-row :gutter="50"
                class="dialog-main-wrapper">
                <el-col :span="8">
                    <div class="dialog-main-item">
                        <h1 class="dialog-main-title">家族编谱人员</h1>
                        <div class="dialog-main-txt">
                            <p>选择后,您将成为家族管理员</p>
                            <p>可以进行家谱的上传、编辑、备份</p>
                            <p>并邀请家族成员加入</p>
                        </div>
                        <div class="dialog-main-btn">
                            <c-button type="primary"
                                slot="reference"
                                class="submit-btn"
                                :wh="150"
                                @click="submitNewFamily">创建一个家族</c-button>
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
                        <div class="dialog-main-btn">
                            <c-button type='primary'
                                slot="reference"
                                class="submit-btn"
                                :wh="150"
                                @click="submitHasFamilyNum">输入家族编号</c-button>
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
                        <div class="dialog-main-btn">
                            <c-button slot="reference"
                                type="primary"
                                class="submit-btn"
                                :wh="150"
                                @click="submitNoneFamilyNum">查询我的家族</c-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>
<script>
import newFamily from './newFamily'
export default {
    data() {
        return {

        }
    },
    components: {
        newFamily
    },
    methods: {
        submitNewFamily() {
            this.$emit('new-family')
        },
        submitHasFamilyNum() {
            this.$emit('has-family-num')
        },
        submitNoneFamilyNum() {
            this.$emit('none-family-num')
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/config.scss";
.init-dialog-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .init-dialog-content {
        // padding: 30px;
        .dialog-tit {
            text-align: center;
            font-size: 24px;
            letter-spacing: 1px;
        }
        .dialog-main-wrapper {
            margin: 70px 0 30px !important;
            .dialog-main-item {
                background: #fff;
                box-shadow: 0px 0px 8px #cacaca;
                border-radius: 3px;
                padding: 30px;
                .dialog-main-title {
                    font-size: 20px;
                    font-weight: 500;
                    margin: 0 0 30px 0;
                }
                .dialog-main-txt {
                    p {
                        margin: 0 0 10px 0;
                    }
                }
                .dialog-main-input {
                    .dialog-main-btn {
                        font-family: "SourceHanSerifCN-Medium-6";
                        margin: 20px 55px;
                        background: #1781b5;
                        border: #1781b5 solid 1px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
