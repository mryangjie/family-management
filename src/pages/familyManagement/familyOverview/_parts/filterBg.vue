<template>
    <div class="filter-cover-bg" :class="{filterBg:isFilter}">
        <div class="filter-cover" v-if="isFilter"></div>
    </div>
</template>

<script>
    export default {
        props:['isFilter']
    }
</script>

<style lang="scss"  scoped>
    .filterBg{
        background:url('../../../../assets/images/familyManagement/filter_bg.png');
        background-size: cover;
        filter:blur(5px);
    }
    .filter-cover-bg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .filter-cover{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255,255,255,0.7);
        opacity: 0.7
    }
</style>
