import Vue from 'vue';
import Icon from 'vue2-svg-icon/Icon.vue';
import app from './app.vue';

import '../statics/styles/globel.less';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import createStore from './store/store.js'
import createRouter from '../config/router'
import './utils/http.js'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.component('icon', Icon);
const store = createStore();
const router = createRouter();

new Vue({
    el: '#root',
    store,
    router,
    render: (h) => h(app)
});