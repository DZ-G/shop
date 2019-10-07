import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'


import './mock/mockServer' // 加载mockServer即可
Vue.component(Button.name, Button)  // <mt-button>

Vue.use(VueLazyLoad,{
    loading:require('./common/imgs/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
