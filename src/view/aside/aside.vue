<template>
    <div>
        <el-drawer
                custom-class="aside"
                title="选择菜单"
                :visible.sync="aside"
                direction="ltr"
                :before-close="handleClose"
                :modal="modal"
                size="18%">
            <ul class="aside_menu">
                <router-link v-for='(li,index) in ul' :key="index" :to="li.path" class="aside_list">
                    <li class="aside_option" @click="handleClose()" :key="index">{{li.title}}</li>
                </router-link>
            </ul>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ul: [
                    {
                        path: {name: 'views'},
                        title: 'pv/uv统计'
                    },
                    {
                        path: {name: 'http'},
                        title: '接口请求统计'
                    },
                    {
                        path: {name: 'error'},
                        title: '错误统计'
                    },
                    {
                        path: {name: 'page'},
                        title: '页面及资源情况统计'
                    },

                ],
                modal: false
            }
        },
        computed: {
            aside() {
                return this.$store.state.asideControl
            }
        },
        methods: {
            handleClose() {
                let self = this
                setTimeout(function () {
                    self.$store.commit('toggleAside')
                }, 300)

            }
        }
    }
</script>

<style lang="less" TYPE="text/less">
    .aside {
        background-color: #444;
        color: #a8a8aa;

        .aside_menu {
            width: 80%;
            height: 80%;
            margin: 150px auto 20px auto;
            font-size: 20px;
            text-align: center;

            .aside_list {
                text-decoration: none;
                display: block
            }

            .aside_option {
                transition: all 0.5s;
                width: 100%;
                line-height: 60px;
                height: 60px;
                font-size: 20px;
                color: rgba(255, 255, 255, 0.8);
                margin: 20px 0 20px 0;
                border-bottom: 1px solid;
                display: block;
                list-style: none;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    color: rgba(255, 255, 255, 1);
                    margin-left: 5px;
                }
            }
        }
    }
</style>