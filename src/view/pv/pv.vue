<template>
    <div class="whole">
        <div v-for="(ch,index) in charts" :ref="ch" class="relation"></div>
    </div>
</template>

<script>


    import eCharts from 'echarts'
    import getChartInfo from '../../utils/getChartsInfo'

    export default {
        data() {
            return {
                charts: [],
                dataZoom: [],
                title: {
                    text: '',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                backgroundColor: '#2c343c',
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    legend: {
                        data: ['pv', 'uv']
                    },
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: []
                    }
                ],
                yAxis: {
                    type: 'value'
                },
                calculable: true,
                visualMap: {
                    // textStyle: {
                    //     color: '#fff'
                    // }
                },
                series: [
                    {
                        name: 'pv',
                        type: 'bar',
                        data: [],
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'pv最大值'},
                                {type: 'min', name: 'pv最小值'}
                            ]
                        },
                    },
                    {
                        name: 'uv',
                        type: 'bar',
                        data: [],
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
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
                    // visualMap: self.visualMap,
                    dataZoom: self.dataZoom,
                    calculable: self.calculable,
                    toolbox: self.toolbox

                };
                return obj;

            }
        },
        mounted() {
            this.mergeChartsAction()
        },
        methods: {
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
                    _opt.series[0].data = chart.pvInfo
                    _opt.series[1].data = chart.uvInfo
                    let relationChart = eCharts.init(dom, 'dark');
                    relationChart.setOption(_opt);
                    relationChart.resize();
                    window.addEventListener('resize', function () {
                        relationChart.resize();
                    })
                })
            },

            async createChartInfo() {
                let url = `pvdisplay`
                let self = this
                let data = await getChartInfo(url)
                let dealData = []
                data.map(function (info) {
                    let _b = {
                        siteName: `${info.siteName}站点`,
                        charts: info.siteName,
                        pvInfo: [],
                        uvInfo: [],
                        timeInfo: []
                    }
                    info.value.map(function (_e) {
                        _b.pvInfo.push(_e.pv)
                        _b.uvInfo.push(_e.uv)
                        _b.timeInfo.push(_e.times)
                    })
                    dealData.push(_b)
                    self.charts.push(info.siteName)
                })
                return dealData
            },
            async mergeChartsAction() {
                let _a = await this.createChartInfo()
                this.createChart(_a)
            }
        }
    }
</script>

<style scoped lang="less" type="text/less">
    .whole{
        width: 100%;
        .relation {
            margin: 10% 5% 30px 5%;
            width: 40%;
            float: left;
            height: 55%;
            background-color: #2c343c;
            box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 5px;
        }

    }


</style>