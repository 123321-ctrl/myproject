import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: "/jingxuan",
    component: () => import('./myFirst'),
    children: [{
        path: 'jingxuan',
        component: () => import('../First/jingxuan/jingXuan'),
    }, {
        path: 'bangdan',
        component: () => import('../First/bangdan/bangDan'),
        redirect: '/bangdan/all',
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
        redirect: '/fenlei/myall',
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
        children: [{
            path: 'all',
            component: () => import('../First/zhuanji/all_zhuanji')
        }, {
            path: 'cn',
            component: () => import('../First/zhuanji/cn_zhuanji')
        }, {
            path: 'en',
            component: () => import('../First/zhuanji/en_zhuanji')
        }, {
            path: 'kr',
            component: () => import('../First/zhuanji/kr_zhuanji')
        }, {
            path: 'jp',
            component: () => import('../First/zhuanji/jp_zhuanji')
        }]
    }, {
        path: 'FM',
        component: () => import('../First/FM/fM'),
    }, {
        path: 'shipin',
        component: () => import('../First/shipin/shiPIn'),
    }, {
        path: 'singersongslist',
        component: () => import('../components/singerSongsList')
    }, {
        path: 'zhuanjidetail',
        component: () => import('../components/zhuanjiDetail')
    }]
}, {
    path: '/myRedio',
    component: () => import('./myRedio'),
    redirect: '/myRedio/jingxuan',
    children: [{
        path: 'jingxuan',
        component: () => import('../Redio/jingxuan/jingXuan'),
    }, {
        path: 'jiemu',
        component: () => import('../Redio/jieMu'),
    }, {
        path: 'biaoqian',
        component: () => import('../Redio/biaoQian'),
    }, {
        path: 'nj',
        component: () => import('../Redio/myNj'),
    },]
}, {
    path: '/myHear',
    component: () => import('./myHear')
}, {
    path: '/kehuDuan',
    component: () => import('./kehuDuan')
}, {
    path: '/riZhi',
    component: () => import('./riZhi')
}, {
    path: '/search',
    component: () => import('../components/mySearch')
},
]
export default new Router({
    routes
})

