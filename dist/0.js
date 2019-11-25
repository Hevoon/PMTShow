webpackJsonp([0],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_page_vue__ = __webpack_require__(727);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e1f2a88_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_vue__ = __webpack_require__(734);
function injectStyle (ssrContext) {
  __webpack_require__(732)
}
var normalizeComponent = __webpack_require__(62)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9e1f2a88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_page_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e1f2a88_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    props:['siteName']
});


/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_siteHead_vue__ = __webpack_require__(721);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59313e9e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_siteHead_vue__ = __webpack_require__(725);
function injectStyle (ssrContext) {
  __webpack_require__(723)
}
var normalizeComponent = __webpack_require__(62)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59313e9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_siteHead_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59313e9e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_siteHead_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(724);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("010c7308", content, true, {});

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(undefined);
// imports


// module
exports.push([module.i, ".head[data-v-59313e9e]{position:relative;background-color:#f2f2f2;height:60px;clear:both}.head_text[data-v-59313e9e]{margin:0;height:60px;text-align:center;width:100%;line-height:60px;color:#333}", ""]);

// exports


/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"head"},[_c('h1',{staticClass:"head_text"},[_vm._v(_vm._s(_vm.siteName)+" 站点")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getChartsInfo__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_siteHead_siteHead_vue__ = __webpack_require__(722);
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
            let data = await Object(__WEBPACK_IMPORTED_MODULE_1__utils_getChartsInfo__["a" /* default */])(url)
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
                    _opt.title.text = chart.siteName
                    _opt.xAxis[0].data = chart.timeInfo
                    _opt.series[0].data = chart.domTreeCons
                    _opt.series[1].data = chart.whiteScreen
                    _opt.series[2].data = chart.sourceLoad
                    _opt.series[3].data = chart.pageLoad
                    let relationChart = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(dom, 'dark');
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
});


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(733);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("882a0702", content, true, {});

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(undefined);
// imports


// module
exports.push([module.i, ".whole[data-v-9e1f2a88]{width:100%;height:auto;clear:both;float:left;border-bottom:1px solid rgba(0,0,0,.4)}.whole .whole_table[data-v-9e1f2a88]{margin:100px auto 100px 10%;width:80%;float:left;border-bottom:1px solid rgba(0,0,0,.1)}.whole .relations_div[data-v-9e1f2a88]{margin:10% 5% 30px;width:40%;float:left;height:550px;background-color:#2c343c;box-shadow:1px 1px 5px 5px rgba(0,0,0,.3)}.whole .relations_div .relations_head[data-v-9e1f2a88]{width:100%;height:20px;line-height:20px;text-align:center;background-color:#2c343c;margin-bottom:5px;color:hsla(0,0%,100%,.8)}.whole .relations_div .relations[data-v-9e1f2a88]{width:100%;height:calc(100% - 25px);background-color:#2c343c}", ""]);

// exports


/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.charts),function(ch){return _c('div',{staticClass:"whole"},[_c('sitehead',{attrs:{"siteName":ch.siteName}}),_vm._v(" "),_vm._l((ch),function(grandCh){return _c('div',{staticClass:"relations_div"},[_c('h3',{staticClass:"relations_head"},[_vm._v(_vm._s(grandCh.chart)+" ")]),_vm._v(" "),_c('div',{ref:grandCh.chart,refInFor:true,staticClass:"relations"})])}),_vm._v(" "),_c('el-table',{staticClass:"whole_table",attrs:{"data":ch.tableData,"border":"","stripe":"","max-height":"550"}},[_c('el-table-column',{attrs:{"prop":"siteName","align":"center","label":"站点名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"resourceUrl","label":"资源名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"durationTime","align":"center","label":"平均加载耗时ms"}})],1)],2)}),0)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});