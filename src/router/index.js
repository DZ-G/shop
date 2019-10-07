import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Msite/index.vue'
import Search from '../pages/Search/search.vue'
import Order from '../pages/Order/order.vue'
import Login from '../pages/Login/login.vue'
import LoginTo from '../pages/LoginTo/loginTo.vue'


import Shop from '../pages/Shop/Shop.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopGood from '../pages/Shop/ShopGood/ShopGood.vue'
import ShopRating from '../pages/Shop/ShopRating/ShopRating.vue'

Vue.use(VueRouter)

export default new VueRouter({

  routes: [{
      path: '/Msite',
      component: Index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      component: Login,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/Msite'
    },
    {
      path: '/LoginTo',
      component: LoginTo
    },
    {
      path:'/shop',
      component: Shop,
      children:[
        {
            path:'/shop/good',
            component: ShopGood,
        },
        {
            path:'/shop/info',
            component: ShopInfo,
        },
        {
            path:'/shop/rating',
            component: ShopRating,
        },
        {
          path: '',
          redirect: '/shop/good'
        },
      ]
    }
  ]

})
