<template>
    <div class="show-time-line">
        <el-timeline>
            <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :class="{evenLine:index%2}"
            :color="activity.color">

                <el-card>
                    <div class="list-time">{{activity.timestamp}}</div>
                    <div class="list-content">{{activity.content}}</div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                activities: [{
                    content: '通过审核',
                    timestamp: '2018-04-15',
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13',
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11',
                },{
                    content: '通过审核',
                    timestamp: '2018-04-13',
                },{
                    content: '通过审核',
                    timestamp: '2018-04-13',
                }]
            }
        },
    }
</script>

<style lang="scss">
.show-time-line{
    margin-top: 20px;
    padding: 30px;
    background: #fff;
    .el-timeline{
        padding: 0;
    }
    .el-timeline-item__tail{
        border-left: 2px solid #b1d1f9;
        left: 50%; 
        margin-left: -1px;
        z-index: 66
    }
    .el-timeline-item__node--normal{
        background-color: #5ba8ff!important;
        left :50%;
        margin-left: -6px; 
        z-index:  66
    }
    .el-timeline-item__wrapper{
        text-align: right;
        padding-left: 0;
        width: 48%;
    }
    .list-content{
        margin-top: 5px;
    }
    .evenLine{
        text-align: -webkit-right;
        .el-timeline-item__wrapper{
            text-align: left;
        }
    }
}
</style>