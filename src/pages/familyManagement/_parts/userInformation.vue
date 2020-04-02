<template>
    <div class="u-wrapper">
        <div class="u-top">
            <div class="u-top-img">
                <img src="../../../assets/images/familyManagement/tx.png"
                    alt="">
            </div>
            <div class="u-top-list">
                <div class="top-line line-info">
                    <div class="info-name">
                        <span>刘振华</span><i class="iconfont family-icon-nan1"></i>
                    </div>
                    <div class="info-ctrl">
                        <i class="iconfont family-icon-bianji-copy"></i>
                        <i class="iconfont family-icon-duidiaojiaohuanduihuan"></i>
                        <i class="iconfont family-icon-shanchu1"></i>
                    </div>
                </div>
                <div class="top-line line-mark">
                    <el-tag>优秀青年</el-tag>
                    <el-tag>海归</el-tag>
                    <el-tag>孝顺</el-tag>
                    <el-tag>责任感</el-tag>
                </div>
                <div class="top-line line-add">
                    <i class="iconfont family-icon-jiahao1"></i>
                </div>
            </div>
        </div>
        <div class="u-body">
            <el-tabs v-model="tabIndex"
                @tab-click="handleClick">
                <el-tab-pane label="基本资料"
                    name="first">基本资料</el-tab-pane>
                <el-tab-pane label="生平事迹"
                    name="second">生平事迹</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabIndex: 'first'
        }
    },
    methods: {
        handleClick(v) {
            console.log(v);
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/config.scss";
.u-wrapper {
    .u-top {
        @include flexbox;
        padding: 20px;
        border-bottom: 1px solid #eaeaea;
        .u-top-img {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .u-top-list {
            @include flexAuto;
            .top-line {
                margin: 7px 0;
                overflow: hidden;
            }
        }

        .line-info {
            @include flexbox;
            @include flexAverage;
            .info-name {
                font-size: 16px;
                font-weight: bolder;
                i {
                    color: #5ba8ff;
                }
            }
            .info-ctrl {
                i {
                    color: #f78989;
                    margin: 0 10px;
                    font-size: 18px;
                }
            }
        }
        .line-mark {
            @include flexbox;
            span {
                margin-right: 7px;
            }
        }
        .line-add {
            i {
                color: #cccccc;
                font-size: 20px;
            }
        }
    }
}
</style>