import Vue from 'vue'
import Router from 'vue-router'

// 使用插件
Vue.use(Router)

// 编写映射关系
const routes = [
    {
        path: '/trick1',
        meta: {
            title: '父子传值'
        },
        component: () => import('./views/Trick1')
    },
    {
        path: '/trick2',
        meta: {
            title: '子父传值'
        },
        component: () => import('./views/Trick2')
    },
    {
        path: '/trick3/:username',
        meta: {
            title: '路由传递参数 params方式'
        },
        component: () => import('./views/Trick3')
    },
    {
        path: '/trick4',
        meta: {
            title: '路由传递参数 query方式'
        },
        component: () => import('./views/Trick4')
    },
    {
        path: '/trick5',
        meta: {
            title: '路由跳转 通过代码'
        },
        component: () => import('./views/Trick5')
    },
    {
        path: '/trick5child',
        meta: {
            title: '通过路由代码方式跳转过来的'
        },
        component: () => import('./components/Trick5Child')
    },
    {
        path: '/trick6',
        meta: {
            title: '路由 导航守卫'
        },
        component: () => import('./views/Trick6')
    },
    {
        path: '/trick7',
        meta: {
            title: '练习：购物车'
        },
        component: () => import('./views/Trick7')
    }
]

// 创建路由对象
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

// 使用全局路由导航守卫
router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = to.matched[0].meta.title
    next()
})


// 导出路由对象
export default router
