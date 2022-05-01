import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index'

import { Button,Tabs,TabPane,Pagination } from 'element-ui';
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Pagination);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
