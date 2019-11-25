<template>
    <el-container class="whole" id="whole_father">
        <el-header class="header" height=48>
            <headlogo class="search"></headlogo>
        </el-header>
        <el-container style="width: 100%;height: 100%;">
            <el-main class="main">
                <tool></tool>
                <transition>
                    <router-view class="charts"></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import pv from './view/pv/pv.vue'
    import headlogo from './view/head/head.vue'
    import tool from './view/aside/aside.vue'

    export default {
        components: {
            headlogo,
            tool,
            pv
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .whole {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .main {
        padding: 0;
        height: 100%;
        width: 100%;
        background: white;
    }

    .header {
        position: relative;
        padding: 0;
    }

    .charts {
        width: 100%;
        height: 100%;
        background: rgba(220,220,220,0.6);
        background-size: 100%;
        overflow-y: scroll;

    }

    .tabShow {
        width: 100%;
        height: 5%;
    }

    .search {
        width: 100%;
        height: 100%;
    }
</style>