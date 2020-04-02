<template>
    <div class="personal-profile-wrapper common-wrapper">
        {{userInformation.user_introduction}}
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(['userInformation'])
    },
}
</script>

<style lang="scss" scoped>
</style>