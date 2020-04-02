<template>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="6"
        shapeType="circle"
        :particleSize="10"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="800"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push">
    </vue-particles>
</template>

<script>
    export default {
        name:'vue-Particles',
        data(){
            return{

            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
#particles-js{
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
}
</style>