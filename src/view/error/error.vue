<template>
    <div>
        <div class="whole" v-for="(ch,index) in charts">
            <sitehead :siteName="`${ch.chart}站点 错误监控`"></sitehead>
            <el-table
                    class="whole_table"
                    :data="ch.tableDataOrg"
                    border
                    stripe
                    max-height="620">
                <el-table-column
                        prop="message"
                        label="错误信息">
                </el-table-column>
                <el-table-column
                        prop="count"
                        align="center"
                        label="出错数量">
                </el-table-column>
                <el-table-column
                        prop="place"
                        align="center"
                        label="错误地址">
                </el-table-column>
                <el-table-column
                        prop="type"
                        align="center"
                        width="100"
                        label="错误类型">
                </el-table-column>
                <el-table-column
                        prop="lineno"
                        align="center"
                        label="出错行">
                </el-table-column>
                <el-table-column
                        prop="colon"
                        align="center"
                        label="出错列">
                </el-table-column>
            </el-table>
            <el-table
                    class="whole_table"
                    :data="ch.tableDataVue"
                    border
                    stripe
                    max-height="620"
            >
                <el-table-column
                        prop="message"
                        label="错误信息">
                </el-table-column>
                <el-table-column
                        prop="count"
                        align="center"
                        label="出错数量">
                </el-table-column>
                <el-table-column
                        prop="place"
                        align="center"
                        label="错误地址">
                </el-table-column>
                <el-table-column
                        prop="type"
                        width="100"
                        align="center"
                        label="错误类型">
                </el-table-column>
                <el-table-column
                        prop="component"
                        align="center"
                        label="出错组件">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>

    import getChartInfo from '../../utils/getChartsInfo'
    import siteHead from '../../components/siteHead/siteHead.vue'

    export default {
        components: {
            sitehead: siteHead
        },
        data() {
            return {
                dialogVisible: false,
                charts: [],
                errorDetailMessage: [],
            }
        },
        mounted() {
            this.createChartInfo()
        },
        methods: {
            async createChartInfo() {
                let url = `errordisplay`
                let self = this
                let data = await getChartInfo(url)
                data.map(function (info) {
                    //添加表格数据和chartID
                    let _c = {
                        chart: info.siteName,
                        tableDataOrg: info.org,
                        tableDataVue: info.vue
                    }
                    self.charts.push(_c)
                })
            }
        }
    }
</script>

<style scoped lang="less" type="text/less">
    .whole {
        width: 100%;
        height: 100%;
        float: left;
    }

    .whole_table {
        margin: 5% 5% 30px 5%;
        width: 40%;
        float: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

</style>