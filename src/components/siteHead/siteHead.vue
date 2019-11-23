<template>
    <div class="head">
        <h1 class="head_text">{{siteName}} 站点</h1>
    </div>
</template>

<script>

    export default {
        props:['siteName']
    }
</script>

<style scoped type="text/less" lang="less">
    .head {
        position: relative;
        background-color: #f2f2f2;
        height: 60px;
        clear: both;
    }

    .head_text {
        margin: 0;
        height: 60px;
        text-align: center;
        width: 100%;
        line-height: 60px;
        color: #333;
    }

</style>