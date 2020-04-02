<template>
    <div class="dialog-main-input noneFamilyNum">
        <el-form class="reset-form-input reset-form-required reset-form-label"
            ref="familyForm">
            <div class="dialog-main">
                <h1 class="dialog-main-titles">检测到以下家族收录了您的信息</h1>
                <div class="dialog-main-bg select-family-bg">
                    <el-carousel trigger="click"
                        :autoplay='false'
                        height="180px">
                        <el-carousel-item v-for="item in familyList"
                            :key="item.index">
                            <el-row class="select-family"
                                :gutter="35">
                                <el-col :span="8"
                                    v-for='list in item'
                                    :key='list.id'>
                                    <div class="select-family-con select-family-left">
                                        <div class="select-family-top">
                                            <img src="/static/img/tx.e7e340a.png">
                                            <div class="select-family-wirte">
                                                <p class="name-width">{{list.name}}</p>
                                                <p>{{list.code}}</p>
                                            </div>
                                        </div>
                                        <div class="select-family-synopsis">刘氏家族简介刘氏家族简介刘氏家族简介刘氏家族简介刘氏家族简介刘氏家族简介刘氏家族简介刘氏家族简介</div>
                                        <el-button type="text"
                                            class="select-family-join" @click='bindFamily(list)'>点击加入></el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

        </el-form>
    </div>
</template>

<script>
export default {
    props: ['familyListData'],
    data() {
        return {


        }
    },
    computed: {
        familyList() {
            return _.chunk(this.familyListData, 3)
        }
    },
    methods: {
        bindFamily(list){
            this.$emit('bind-family',list)
        }

    },
}
</script>

<style lang="scss">
.noneFamilyNum {
    .name-width {
        width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .el-carousel__arrow--left{
        left: 0;
    }
    .el-carousel__arrow--right{
        right: 0;
    }
    .el-carousel__indicators--horizontal{
        display: none;
    }
}
</style>