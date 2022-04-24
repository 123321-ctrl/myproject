import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    component: () => import('./myFirst'),
    children: [{
        path: '/all',
        component: () => import('../First/bangdan/myAll.vue')
    }, {
        path: '/like',
        component: () => import('../First/bangdan/myLike.vue')
    }, {
        path: '/listen',
        component: () => import('../First/bangdan/myListen.vue')
    }, {
        path: '/new_music',
        component: () => import('../First/bangdan/new_music.vue')
    },{
        path: '/singer',
        component: () => import('../First/fenlei/mySinger.vue')
    }]
}, {
    path: '/myRedio',
    component: () => import('./myRedio')
}, {
    path: '/myHear',
    component: () => import('./myHear')
}, {
    path: '/kehuDuan',
    component: () => import('./kehuDuan')
}, {
    path: '/riZhi',
    component: () => import('./riZhi')
}]
export default new Router({
    routes
})