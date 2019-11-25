<template>
    <div>
        <div class="whole" v-for="ch in charts">
            <sitehead :siteName="`${ch.siteName}站点 性能及资源加载监控`"></sitehead>
            <div v-for="grandCh in ch" class="relations_div">
                <h3 class="relations_head">{{grandCh.chart}} </h3>
                <div class="relations" :ref="grandCh.chart"></div>
            </div>
            <el-table
                    class="whole_table"
                    :data="ch.tableData"
                    border
                    stripe
                    max-height="550"
            >
                <el-table-column
                        prop="siteName"
                        align="center"
                        label="站点名">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="resourceUrl"
                        label="资源名称">
                </el-table-column>
                <el-table-column
                        prop="durationTime"
                        align="center"
                        label="平均加载耗时ms">
                </el-table-column>
            </el-table>
        </div>
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
                        color: 'rgba(255, 255, 255, 1)',
                        fontSize: 15
                    }
                },
                backgroundColor: '#2c343c',
                tooltip: {
                    trigger: 'axis',
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
                    legend: {}
                },
                xAxis: [
                    {
                        type: 'category',
                        data: []
                    }
                ],
                yAxis: {
                    type: 'value',

                },
                calculable: true,
                visualMap: {
                    min: 200,
                    max: 400,
                    splitNumber: 4,
                },
                series: [
                    {
                        name: 'dom构建时间',
                        type: 'line',
                        smooth: true,
                        data: []
                    },
                    {
                        name: '白屏时间',
                        type: 'line',
                        smooth: true,
                        data: [],
                    }, {
                        name: '资源加载时间',
                        type: 'line',
                        smooth: true,
                        data: [],
                    }, {
                        name: '页面加载时间',
                        type: 'line',
                        smooth: true,
                        data: [],
                    }

                ]
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
                let url = `pagedisplay`
                let self = this
                let data = await getChartInfo(url)
                let dealData = []
                data.map(function (info) {
                    let pageList = []
                    let chartList = []
                    let value = info.value
                    for (let key in value) {
                        let _b = {
                            siteName: `${info.siteName}站点`,
                            charts: key,
                            domTreeCons: [],
                            whiteScreen: [],
                            sourceLoad: [],
                            pageLoad: [],
                            timeInfo: [],
                        }
                        value[key].map(function (_e) {
                            _b.domTreeCons.push(_e.domTreeCons)
                            _b.whiteScreen.push(_e.whiteScreen)
                            _b.sourceLoad.push(_e.sourceLoad)
                            _b.pageLoad.push(_e.pageLoad)
                            _b.timeInfo.push(_e.times)
                        })
                        pageList.push(_b)
                        //添加表格数据和chartID
                        let _c = {
                            chart: key
                        }
                        chartList.push(_c)
                    }
                    dealData.push(pageList)
                    chartList.tableData = info.resourceInfo
                    chartList.siteName = info.siteName
                    if (chartList.length !== 0) {
                        self.charts.push(chartList)
                    }
                })
                return dealData
            },
            createChart(infoArray) {
                let self = this
                if (!Array.isArray(infoArray)) {
                    return
                }
                infoArray.map(function (_e) {
                    _e.map(function (chart) {
                        let ref = chart.charts
                        let domArray = self.$refs[ref]
                        let dom = domArray[0]
                        let _opt = self.opt
                        // _opt.title.text = chart.siteName
                        _opt.xAxis[0].data = chart.timeInfo
                        _opt.series[0].data = chart.domTreeCons
                        _opt.series[1].data = chart.whiteScreen
                        _opt.series[2].data = chart.sourceLoad
                        _opt.series[3].data = chart.pageLoad
                        let relationChart = eCharts.init(dom, 'dark');
                        relationChart.setOption(_opt);
                        window.addEventListener('resize', function () {
                            relationChart.resize();
                        })
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
        height: auto;
        clear: both;
        float: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);


        .whole_table {
            margin: 100px auto 100px 10%;
            width: 80%;
            float: left;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .relations_div {
            margin: 8% 5% 30px 5%;
            width: 40%;
            float: left;
            height: 440px;
            background-color: #2c343c;
            box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 5px;

            .relations_head {
                width: 100%;
                height: 20px;
                font-size: 15px;
                line-height: 20px;
                text-align: center;
                background-color: #2c343c;
                margin-bottom: 5px;
                color: rgba(255, 255, 255, 0.8);
            }

            .relations {
                width: 100%;
                height: calc(100% - 25px);
                background-color: #2c343c;

            }
        }
    }

</style>