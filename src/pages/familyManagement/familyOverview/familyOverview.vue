<template>
    <div class="page-view familyOverview-page">

        <!--登陆后选择家族-->
        <filter-bg :isFilter="isFilter" v-if="isFilter"></filter-bg>
        <el-dialog width="70%" :visible.sync="dialogVisible">
            <select-family 
                class="select-pop-wrapper"
                @new-family='newFamilyBtn'
                @has-family-num='hasFamilyNumBtn'
                @none-family-num='noneFamilyNumBtn'>
            </select-family>
        </el-dialog>
 
        <!--登陆后已有家族-->
        <!--<homeAfterLogin></homeAfterLogin>-->



        <el-dialog :visible.sync="dialogVisibleNew">
            <new-family @creatSubmit='creatSubmit'></new-family>
        </el-dialog>
        <el-dialog :visible.sync="dialogVisibleHas">
            <has-family-num @cancel-hasFamilyNum='cancelBtn'></has-family-num>
        </el-dialog>
        <el-dialog :visible.sync="dialogVisibleNone">
            <none-family-num 
            @bind-family='bindFamilyBtn'
            :familyListData='familyListData'></none-family-num>
        </el-dialog>

    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import filterBg from "./_parts/filterBg";
import selectFamily from "./_parts/selectFamily"; //登陆后选择家族
import homeAfterLogin from "./_parts/homeAfterLogin"; //登陆后已有家族

import newFamily from './_parts/newFamily'
import hasFamilyNum from './_parts/hasFamilyNum'
import noneFamilyNum from './_parts/noneFamilyNum'
import mixinConfig from '@/mixins/mixin.config.js'
export default {
    mixins: [mixinConfig],
    data() {
        return {
            code: "", // 407无家族 
            isFilter: true,
            dialogVisible: true,
            dialogVisibleNew: false,
            dialogVisibleHas: false,
            dialogVisibleNone: false,

            familyListData:[]
        
        };
    },
    components: {
        filterBg,
        selectFamily,
        homeAfterLogin,

        newFamily,
        hasFamilyNum,
        noneFamilyNum
    },
    computed: {
        ...mapGetters(['userInfoLogin'])
    },
    methods: {
        ...mapActions(['createFamily','familyList','bindFamily']),
        cancelBtn(){
            this.dialogVisibleHas = false
        },
        newFamilyBtn() {
            this.dialogVisibleNew = true
        },
        hasFamilyNumBtn() {
            this.dialogVisibleHas = true
        },
        bindFamilyBtn(data){
            this.bindFamily({
                familyId:data.id,
                familyCode:data.code
            }).then( res=>{
                if(res.code=='200'){
                    this.$message.success('您已加入'+data.name)
                    this.dialogVisibleNone = false;
                }else{
                    this.$message.error(res.message)
                }
            })
        },
        noneFamilyNumBtn() {
            this.familyList().then( res=>{
                if(res.code =='200'){
                    this.familyListData = res.data;
                    this.dialogVisibleNone = true
                }else{
                    this.$message.error(res.message)
                }
            })
        },
        creatSubmit(val){
            let o ={
                familyName: val.familyName,
                generation: val.num
            }
            this.createFamily(o).then( res=>{
                console.log(res)
                if(res.code=='200'){
                    this.dialogVisibleNew = false;
                    this.$message.success(res.msg)
                }else{
                    this.$message.error(res.msg)
                }
            })
        }
    },
    created() {
        this.code = this.$route.params.code;
        
    }
};
</script>

<style lang="scss">
@import "./familyOverview.scss";
</style>
