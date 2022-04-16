import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path:'/',
    component: () => import('./myFirst')
},{
    path:'/myRedio',
    component: () => import('./myRedio')
},{
    path:'/myHear',
    component: () => import('./myHear')
},{
    path:'/kehuDuan',
    component: () => import('./kehuDuan')
},{
    path:'/riZhi',
    component: () => import('./riZhi')
}]
export default new Router({
    routes
})