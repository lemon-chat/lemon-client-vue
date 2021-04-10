import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './views/Index.vue'
import Create from './views/Create.vue'
import Login from './views/Login.vue'
const router:any = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'index',
        component: Login as any,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/create',
        name: 'create',
        component: Create as any,
        meta: {
            title: '创建'
        }
    },
    {
      path: '/login',
      name: 'login',
      component: Login as any,
      meta: {
          title: '登录'
      }
  }
  ]
})

export default router
