export default [
    {
        path: '/',
        redirect: '/views'
    },
    {
        path: '/views',
        component: () => import('../src/view/pv/pv.vue'),
        name: 'views'
    },
    {
        path: '/httpmonitor',
        component: () => import('../src/view/http/http.vue'),
        name: 'http'
    },
    {
        path: '/pagemonitor',
        component: () => import('../src/view/page/page.vue'),
        name: 'page'
    },
    {
        path: '/errormonitor',
        component: () => import('../src/view/error/http.vue'),
        name: 'error'
    },
    // {
    //     path: '/home',
    //     // meta: {
    //     //     requireAuth: true, // 判断是否需要登录
    //     // },
    //     component: () => import('../src/app.vue'),
    //     children: [
    //         {
    //             path: '/',
    //             component: () => import('../src/view/pv/pv.vue'),
    //             name: 'views'
    //         },
    //         // {
    //         //     path: 'dance',
    //         //     component: () => import('../src/views/dance/dance.vue'),
    //         //     name: 'dance'
    //         // },
    //         // {
    //         //     path: 'create',
    //         //     component: () => import('../src/views/danceCreate/danceCreate.vue'),
    //         //     name: 'create'
    //         // }
    //     ]
    // }
]
