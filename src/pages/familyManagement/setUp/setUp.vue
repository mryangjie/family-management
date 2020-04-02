<template>
    <div class="page-view setUp-page">
        <el-tabs class="set-up-tab"
            v-model="activeName"
            @tab-click="handleClick">
          <el-tab-pane label="成员管理"
              name="first">
              <edit-chief></edit-chief>
          </el-tab-pane>
          <el-tab-pane label="其他设置"
              name="second">
              <other-settings></other-settings>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import editChief from "./_parts/editChief";
    import otherSettings from "./_parts/otherSettings";
    export default {
        data() {
            return {
                activeName: "first"
            };
        },
        components: {
            editChief,
            otherSettings,
        },
        methods: {
            ...mapActions(["getUserInformation"]),
            handleClick(tab, event) { }
        },
        created() {
            this.getUserInformation();
        }
    }
</script>

<style lang="scss">
.setUp-page {
    .set-up-tab {
        .el-tabs__nav-wrap {
            background: #fff !important;
            height: 50px;
            line-height: 50px;
            .el-tabs__active-bar {
                margin-left: 20px;
                width: 75px !important;
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
    .set-up-tab {
        .el-tabs__item.is-active,
        .el-tabs__item:hover {
            color: #1781b5;
        }
        .el-tabs__active-bar {
            background-color: #1781b5;
        }
        .common-wrapper {
            background: #fff;
            padding: 30px 30px 50px;
            -webkit-box-shadow: 0px 0px 8px #cacaca;
            box-shadow: 0px 0px 8px #cacaca;
        }
    }
}
</style>
