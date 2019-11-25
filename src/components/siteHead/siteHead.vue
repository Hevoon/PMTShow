<template>
    <div class="head">
        <h1 class="head_text">{{siteName}}</h1>
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
        height: 48px;
        clear: both;
    }

    .head_text {
        margin: 0;
        height: 48px;
        text-align: center;
        width: 100%;
        font-size: 20px;
        line-height: 48px;
        color: #333;
    }

</style>