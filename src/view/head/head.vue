<template>
    <div class="head">
        <el-button class="head_aside_tools"
                   icon="el-icon-s-unfold" size="medium"
                   @click="toggleAside"
                   circle></el-button>
        <h1 class="head_text">前端性能监控系统</h1>
    </div>
</template>

<script>

    export default {
        methods: {
            toggleAside() {
                this.$store.commit('toggleAside')
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .head {
        position: relative;
        background-color: #313131;
        height: 48px;
        clear: both;
    }

    .head_text {
        margin: 0;
        height: 48px;
        font-size: 20px;
        text-align: left;
        width: 30%;
        line-height: 48px;
        color: white;
        padding-left: 50px;
        float: left;
    }

    .head_aside_tools {
        margin: 5px 0 0 10px;
        float: left;
        font-size: 14px;
        background: rgba(255, 255, 255, 1);
    }
</style>