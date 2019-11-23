<script src="../../../../pmts/src/router.js"></script>
<template>
    <div>
        <div class="whole" v-for="(ch,index) in charts">
            <sitehead :siteName="ch.chart"></sitehead>
            <el-table
                    class="whole_table"
                    :data="ch.tableDataOrg"
                    border
                    stripe
                    max-height="700">
                <el-table-column
                        width="300"
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
                        width="300"
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
        <el-dialog
                title="详情错误信息"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
            <el-table
                    :data="httpDetailMessage"
                    border
                    stripe
            >
                <el-table-column
                        width="300"
                        prop="httpApi"
                        label="接口名称(错误)">
                </el-table-column>
                <el-table-column
                        prop="responseText"
                        label="错误信息">
                </el-table-column>
                <el-table-column
                        prop="counts"
                        label="错误数量"
                >
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
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
            },
            openDetail(e) {
                this.dialogVisible = true
                this.errorDetailMessage = e.message
            },
            handleClose() {
                this.dialogVisible = false
                this.errorDetailMessage = []
            }
        }
    }
</script>

<style scoped lang="less" type="text/less">
    .whole {
        width: 100%;
        height: 100%;
        float: left;
        /*border-bottom: 1px solid rgba(0, 0, 0, 0.4);*/
    }

    .whole_table {
        margin: 5% 5% 30px 5%;
        width: 40%;
        float: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

</style>