<template>
    <el-row :gutter="30"
        class="el-row basic-data-wrapper">
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">{{userInformation.surname}}氏{{userInformation.generation}}代</div>
                <div class="basic-data-con-first">
                    <img class="basic-data-con-img"
                        src="/static/img/tx.e7e340a.png"
                        alt />
                </div>
                <div class="basic-data-con-second">
                    <span class="basic-data-con-name">
                        {{userInformation.name}}
                        <i class="el-icon-s-custom"></i>
                    </span>
                    <span>字 {{userInformation.alias_name}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">出生时间</div>
                <div class="basic-data-con-first">{{userInformation.birthday}}</div>
                <div class="basic-data-con-second">
                    <span>甲辰年龙年六月廿八</span>
                    <span>辛未月 丙戌日</span>
                </div>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">出生地</div>
                <div class="basic-data-con-first">{{userInformation.birth_province_name}}</div>
                <div class="basic-data-con-second">
                    <span>{{userInformation.birth_city_name}}</span>
                    <span>{{userInformation.birth_area_name}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">现居地址</div>
                <div class="basic-data-con-first">{{userInformation.province_name}}</div>
                <div class="basic-data-con-second">
                    <span>{{userInformation.city_name}}</span>
                    <span>{{userInformation.area_name}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">学历/毕业院校</div>
                <div class="basic-data-con-first">{{userInformation.education_name}}</div>
                <div class="basic-data-con-second">{{userInformation.student}}</div>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="basic-data-content">
                <div class="basic-data-title">所在行业/职位</div>
                <div class="basic-data-con-first">{{userInformation.first_industry_name}}</div>
                <div class="basic-data-con-second">{{userInformation.second_industry_name}}</div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(['userInformation'])
    },
};
</script>

<style lang="scss" scoped>
</style>