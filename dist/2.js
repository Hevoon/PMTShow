webpackJsonp([2],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_http_vue__ = __webpack_require__(726);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35ff5069_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_http_vue__ = __webpack_require__(731);
function injectStyle (ssrContext) {
  __webpack_require__(729)
}
var normalizeComponent = __webpack_require__(51)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35ff5069"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_http_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35ff5069_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_http_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getChartsInfo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_siteHead_siteHead_vue__ = __webpack_require__(276);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        sitehead: __WEBPACK_IMPORTED_MODULE_2__components_siteHead_siteHead_vue__["a" /* default */]
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
            let data = await Object(__WEBPACK_IMPORTED_MODULE_1__utils_getChartsInfo__["a" /* default */])(url)
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
                let relationChart = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(dom, 'dark');
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
});


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(730);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(50)("0a2d5714", content, true, {});

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".whole[data-v-35ff5069]{width:100%;height:100%;float:left}.whole_table[data-v-35ff5069]{margin:8% 5% 30px;width:40%;float:left;border-bottom:1px solid rgba(0,0,0,.1)}.relations[data-v-35ff5069]{margin:8% 5% 30px;width:40%;float:left;height:440px;background-color:#2c343c;box-shadow:1px 1px 5px 5px rgba(0,0,0,.3)}", ""]);

// exports


/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.charts),function(ch,index){return _c('div',{staticClass:"whole"},[_c('sitehead',{attrs:{"siteName":((ch.chart) + "站点 接口请求监控")}}),_vm._v(" "),_c('div',{ref:ch.chart,refInFor:true,staticClass:"relations"}),_vm._v(" "),_c('el-table',{staticClass:"whole_table",attrs:{"data":ch.tableData,"border":"","stripe":"","max-height":"620"}},[_c('el-table-column',{attrs:{"width":"300","prop":"httpApi","label":"接口名称(错误)"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"loadTime","align":"center","label":"平均耗时ms"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"num","align":"center","label":"总错误数量"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{on:{"click":function($event){return _vm.openDetail(scope.row)}}},[_vm._v("详情信息")])]}}],null,true)})],1)],1)}),_vm._v(" "),_c('el-dialog',{attrs:{"title":"详情错误信息","visible":_vm.dialogVisible,"width":"50%","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-table',{attrs:{"data":_vm.httpDetailMessage,"border":"","stripe":""}},[_c('el-table-column',{attrs:{"width":"300","prop":"httpApi","label":"接口名称(错误)"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"responseText","label":"错误信息"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"counts","label":"错误数量"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleClose}},[_vm._v("确 定")])],1)],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});