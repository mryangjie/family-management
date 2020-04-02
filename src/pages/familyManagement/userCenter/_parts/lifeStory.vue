<template>
    <div class="show-time-line">
        <el-timeline v-if='activities.length'>
            <el-timeline-item v-for="(activity, index) in activities"
                :key="index"
                :class="{evenLine:index%2}"
                :color="activity.color">

                <el-card>
                    <div class="list-time">{{activity.deeds_title}}</div>
                    <div class="list-content">{{activity.deeds_title}}</div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
        <div class="none-data" v-else>暂无事迹更新哦~</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const tmp_pageSize = 10;
export default {
    data() {
        return {
            activities: [],
            pageSize: tmp_pageSize,
            pageSizes: [tmp_pageSize ,20 ,30 ,50,100],
            currentPage: 1,
        }
    },
    computed: {
       params(){

       }
    },
    methods: {
        ...mapActions(['getUserDeedsList']),
        init(){
            this.getUserDeedsList({
                pageSize:this.pageSize,
                currentPage:this.currentPage
            }).then( res =>{
                if(res.code =='200'){
                    this.activities = res.data.items
                }
            })
        }

    },
    created () {
        this.init()
    },
}
</script>

<style lang="scss">
.none-data{
    color:#c5c0c0;
    text-align: center;
    font-size: 12px;
}
.show-time-line {
    padding: 30px;
    background: #fff;
    -webkit-box-shadow: 0px 0px 8px #cacaca;
    box-shadow: 0px 0px 8px #cacaca;
    .el-timeline {
        padding: 0;
    }
    .el-timeline-item__tail {
        border-left: 2px solid #b1d1f9;
        left: 50%;
        margin-left: -1px;
        z-index: 66;
    }
    .el-timeline-item__node--normal {
        background-color: #5ba8ff !important;
        left: 50%;
        margin-left: -6px;
        z-index: 66;
    }
    .el-timeline-item__wrapper {
        text-align: right;
        padding-left: 0;
        width: 48%;
    }
    .list-content {
        margin-top: 5px;
    }
    .evenLine {
        // text-align: -webkit-right;
        .el-timeline-item__wrapper {
            text-align: left;
            margin-left: 52%;
        }
    }
}
</style>