import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
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
            redirect: '/zhuanji/cn',
            children: [{
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
            children: [{
                path: 'jingxuan',
                component: () => import('../First/FM/jingXuan'),
            }, {
                path: 'jiemu',
                component: () => import('../First/FM/jieMu'),
            }, {
                path: 'biaoqian',
                component: () => import('../First/FM/biaoQian'),
            }, {
                path: 'nj',
                component: () => import('../First/FM/myNj'),
            }]
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
        path: '/myHear',
        component: () => import('./myHear')
    }, {
        path: '/guanzhu',
        component: () => import('./guanZhu')
    }, {
        path: '/search',
        component: () => import('../components/mySearch')
    }, {
        path: '/login',
        component: () => import('../components/myLogin')
    },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.path === "/myHear" || to.path === "/guanzhu") {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router

