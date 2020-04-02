<script type="text/javascript">
export default {
    name: 'c-button',
    methods: {
        handleClick() {
            if (this.to) {
                this.$router.push(this.to);
            } else {
                this.$emit('click');
            }
        }
    },
    props: ['type', 'to', 'disabled', 'wh']
}
</script>
<template>
    <span v-if="disabled==true"
        :style="{ width: wh + 'px' }"
        class="c-btn disableButton"
        :class="{'primary':type =='primary'}">
        <slot></slot>
    </span>
    <span v-else
        class="c-btn "
        :style="{ width: wh + 'px' }"
        :class="{'primary':type =='primary'}"
        @click="handleClick">
        <slot></slot>
    </span>
</template>

<style lang="scss">
@import "../assets/scss/config.scss";
.c-btn {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    height: 35px;
    line-height: 32px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    cursor: pointer;
    &.primary {
        background-color: $submit_btn_color;
        color: #fff;
        &:hover {
            background-color: $submit_btn_color_active;
        }
    }
}
.disableButton {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
</style>
