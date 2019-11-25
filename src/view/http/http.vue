<template>
    <div>
        <div class="whole" v-for="(ch,index) in charts">
            <sitehead :siteName="`${ch.chart}站点 接口请求监控`"></sitehead>
            <div class="relations" :ref="ch.chart"></div>
            <el-table
                    class="whole_table"
                    :data="ch.tableData"
                    border
                    stripe
                    max-height="620"
            >
                <el-table-column
                        width="300"
                        prop="httpApi"
                        label="接口名称(错误)">
                </el-table-column>
                <el-table-column
                        prop="loadTime"
                        align="center"
                        label="平均耗时ms">
                </el-table-column>
                <el-table-column
                        prop="num"
                        align="center"
                        label="总错误数量">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="操作">
                    <template slot-scope="scope" >
                        <el-button @click="openDetail(scope.row)">详情信息</el-button>
                    </template>
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


    import eCharts from 'echarts'
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
                relationChart: {},
                httpDetailMessage: [],
                dataZoom: [],
                title: {
                    text: '',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                backgroundColor: '#2c343c',
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: 'rgba(0,0,0,1)',
                            shadowColor: 'rgba(0,0,0,0.5)',
                        }
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: true, readOnly: false},
                        // magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    legend: {
                        data: ['错误请求', '正常请求']
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            // lineStyle: {
                            //     color: '#FF4500'
                            // }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '错误请求' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: []
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            // lineStyle: {
                            //     color: '#ADD8E6'
                            // }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '正常请求' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: []
                    }
                ],
                yAxis: {
                    type: 'value',
                    // boundaryGap: ['1%', '1%']

                },
                calculable: true,
                visualMap: {
                    min: 200,
                    max: 400,
                    splitNumber: 4,
                },
                series: [
                    {
                        name: '错误请求',
                        type: 'line',
                        smooth: true,
                        data: [],
                        lineStyle: {
                            color: '#A52A2A'
                        },
                        itemStyle:{
                            color: 	'#A52A2A'
                        }
                    },
                    {
                        name: '正常请求',
                        type: 'line',
                        smooth: true,
                        xAxisIndex: 1,
                        data: [],
                        lineStyle: {
                            color: '#4682B4'
                        },
                        itemStyle:{
                            color: '#4682B4'
                        }
                    }

                ],
                tableData: []
            }
        },
        computed: {
            opt() {
                let self = this;
                let obj = {
                    title: self.title,
                    tooltip: self.tooltip,
                    legend: self.legend,
                    xAxis: self.xAxis,
                    yAxis: self.yAxis,
                    series: self.series,
                    backgroundColor: self.backgroundColor,
                    textStyle: self.textStyle,
                    dataZoom: self.dataZoom,
                    calculable: self.calculable,
                    toolbox: self.toolbox,

                };
                return obj;
            }
        },
        mounted() {
            this.mergeChartsAction()
        },
        methods: {
            async createChartInfo() {
                let url = `httpdisplay`
                let self = this
                let data = await getChartInfo(url)
                let dealData = []
                data.map(function (info) {
                    let _b = {
                        siteName: `${info.siteName}站点`,
                        charts: info.siteName,
                        failCount: [],
                        successCount: [],
                        failAvgTime: [],
                        successAvgTime: [],
                        timeInfo: [],
                    }
                    info.value.list.map(function (_e) {
                        _b.failCount.push(_e.failCount)
                        _b.successCount.push(_e.successCount)
                        _b.failAvgTime.push(_e.failAvgTime)
                        _b.successAvgTime.push(_e.successAvgTime)
                        _b.timeInfo.push(_e.times)
                    })
                    dealData.push(_b)
                    //添加表格数据和chartID
                    let _c = {
                        chart: info.siteName,
                        tableData: info.value.failInfo
                    }
                    self.charts.push(_c)
                })
                return dealData
            },
            createChart(infoArray) {
                let self = this
                if (!Array.isArray(infoArray)) {
                    return
                }
                infoArray.map(function (chart, index) {
                    let ref = chart.charts
                    let domArray = self.$refs[ref]
                    let dom = domArray[0]
                    let _opt = self.opt
                    _opt.title.text = chart.siteName
                    _opt.xAxis[0].data = chart.timeInfo
                    _opt.xAxis[1].data = chart.timeInfo
                    _opt.series[1].data = chart.successCount
                    _opt.series[0].data = chart.failCount
                    let relationChart = eCharts.init(dom, 'dark');
                    relationChart.setOption(_opt);
                    window.addEventListener('resize', function () {
                        relationChart.resize();
                    })
                })
            },
            async mergeChartsAction() {
                let _a = await this.createChartInfo()
                this.createChart(_a)
            },
            openDetail(e) {
                this.dialogVisible = true
                this.httpDetailMessage = e.message
            },
            handleClose() {
                this.dialogVisible = false
                this.httpDetailMessage = []
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
        margin: 8%  5% 30px 5%;
        width: 40%;
        float: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .relations {
        margin: 8% 5% 30px 5%;
        width: 40%;
        float: left;
        height: 440px;
        background-color: #2c343c;
        box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 5px;
    }
</style>