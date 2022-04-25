import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    component: () => import('./myFirst'),
    children: [{
        path: 'jingxuan',
        component: () => import('../First/jingxuan/jingXuan'),
    }, {
        path: 'bangdan',
        component: () => import('../First/bangdan/bangDan'),
        children: [{
            path: 'all',
            component: () => import('../First/bangdan/myAll.vue')
        }, {
            path: 'like',
            component: () => import('../First/bangdan/myLike.vue')
        }, {
            path: 'listen',
            component: () => import('../First/bangdan/myListen.vue')
        }, {
            path: 'new_music',
            component: () => import('../First/bangdan/new_music.vue')
        }]
    }, {
        path: 'chunyinyue',
        component: () => import('../First/chunyinyue/chunyinYue'),
    }, {
        path: 'fenlei',
        component: () => import('../First/fenlei/fenLei'),
        children: [{
            path: 'myall',
            component: () => import('../First/fenlei/myAll')
        }, {
            path: 'singer',
            component: () => import('../First/fenlei/mySinger.vue')
        }, {
            path: 'femalesinger',
            component: () => import('../First/fenlei/femaleSinger.vue')
        }]
    }, {
        path: 'zhuanji',
        component: () => import('../First/zhuanji/zhuanJi'),
    }, {
        path: 'FM',
        component: () => import('../First/FM/fM'),
    }, {
        path: 'shipin',
        component: () => import('../First/shipin/shiPIn'),
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


// {
//     path: 'all',
//     component: () => import('../First/bangdan/myAll.vue')
// }, {
//     path: 'like',
//     component: () => import('../First/bangdan/myLike.vue')
// }, {
//     path: 'listen',
//     component: () => import('../First/bangdan/myListen.vue')
// }, {
//     path: 'new_music',
//     component: () => import('../First/bangdan/new_music.vue')
// },{
//     path: '/site/singer',
//     component: () => import('../First/fenlei/mySinger.vue')
// }]
// // 