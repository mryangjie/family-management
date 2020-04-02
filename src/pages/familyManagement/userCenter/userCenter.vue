<template>
    <div class="page-view userCenter-page">
        <el-tabs class="user-center-tab"
            v-model="activeName"
            @tab-click="handleClick">
            <el-tab-pane label="基本资料"
                name="first">
                <base-info></base-info>
            </el-tab-pane>
            <el-tab-pane label="个人简介"
                name="second">
                <user-info></user-info>
            </el-tab-pane>
            <el-tab-pane label="个人关系"
                name="third">个人关系</el-tab-pane>
            <el-tab-pane label="生平事迹"
                name="fourth">
                <life-story></life-story>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import baseInfo from "./_parts/baseInfo";
import userInfo from "./_parts/userInfo";
import lifeStory from "./_parts/lifeStory";
export default {
    data() {
        return {
            activeName: "first"
        };
    },
    components: {
        baseInfo,
        userInfo,
        lifeStory
    },
    methods: {
        ...mapActions(["getUserInformation"]),
        handleClick(tab, event) { }
    },
    created() {
        // this.getUserInformation();
    }
};
</script>
<style lang="scss">
.userCenter-page {
    .user-center-tab {
        .el-tabs__nav-wrap {
            background: #fff !important;
            height: 50px;
            line-height: 50px;
            .el-tabs__active-bar {
                margin-left: 20px;
                width: 75 !important;
            }
            #tab-first {
                margin-left: 20px;
            }
            .el-tabs__item {
                font-size: 16px;
            }
        }
        .el-tabs__nav-wrap::after {
            background-color: #fff;
        }
    }
    .user-center-tab {
        .el-tabs__item.is-active,
        .el-tabs__item:hover {
            color: #1781b5;
        }
        .el-tabs__active-bar {
            background-color: #1781b5;
        }
        .basic-data-wrapper {
            // margin-top: 20px;
            .basic-data-content {
                background: #fff;
                border-radius: 3px;
                text-align: center;
                padding: 15px 0;
                -webkit-box-shadow: 0px 0px 8px #cacaca;
                box-shadow: 0px 0px 8px #cacaca;
                .basic-data-title {
                    line-height: 28px;
                }
                .basic-data-con-first {
                    height: 46px;
                    line-height: 46px;
                    margin: 15px 0;
                    font-size: 16px;
                    .basic-data-con-img {
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                    }
                }
                .basic-data-con-second {
                    height: 40px;
                    line-height: 40px;
                    color: #666;
                    font-size: 12px;
                    span {
                        display: block;
                        height: 20px;
                        line-height: 20px;
                        i {
                            color: #5ba8ff;
                        }
                    }
                    .basic-data-con-name {
                        font-size: 16px;
                        color: #1f2d3d;
                    }
                }
            }
        }
        .common-wrapper {
            background: #fff;
            padding: 30px 30px 50px;
            -webkit-box-shadow: 0px 0px 8px #cacaca;
            box-shadow: 0px 0px 8px #cacaca;
        }
        .personal-profile-wrapper {
            p {
                margin-top: 0;
                line-height: 22px;
                letter-spacing: 0.5px;
            }
        }
    }
}
</style>
