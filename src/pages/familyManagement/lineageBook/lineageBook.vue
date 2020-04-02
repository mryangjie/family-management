<template>
    <div class="page-view lineageBook-page">
        <!-- <el-button @click="showInfoPop">展示</el-button> -->
        
        <line-tree @send-node='nodeDetail'></line-tree>
        <el-dialog class="need-dialog"
            top='0vh'
            :visible.sync="dialogVisible">
            <user-information></user-information>
        </el-dialog>
    </div>
</template>

<script>
import userInformation from '../_parts/userInformation'
import lineTree from './_parts/lineTree'
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    components: {
        userInformation,
        lineTree
    },
    methods: {
        showInfoPop() {
            this.dialogVisible = true
        },
        nodeDetail(){
            this.dialogVisible = true;
        }
    },
}
</script>

<style lang="scss">
.lineageBook-page {
    font-size: 14px;
    .need-dialog {
        overflow: hidden;
        .el-dialog {
            margin-top: 0;
            position: absolute;
            right: 0;
            width: 510px;
            height: 100%;
        }
        .el-dialog__body{
            padding-top: 0
        }
    }
}
</style>