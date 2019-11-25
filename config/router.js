import Router from 'vue-router'
import routes from './routers'

export default () => {
    return new Router({
        routes,
        mode: 'history',//不适用hash,
        linkActiveClass: 'active-link',//激活时，或处于子路径时加上该class
        linkExactActiveClass: 'exact-active-link',//完全处于路径下时才加该class
        fallback: true//不支持history的浏览器会调成hash
    })
}
