import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: (resolve) => require(['../components/Hello.vue'], resolve),
      children:[
        {
          path: '/Count1',
          name: 'Count1',
          component: (resolve) => require(['../components/Count1.vue'], resolve)
        },
        {
          path: '/Count2',
          name: 'Count2',
          component: (resolve) => require(['../components/Count2.vue'], resolve)
        }
      ]
    }
  ]
})
