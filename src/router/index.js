import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面二级容器
import Container from '../views/Container/Index.vue'
// 默认首页
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Index
  // },
  // 创建二级路由页面
  
  {
    path: '/visitor',
    name: 'visitor',
    component: () => import('../views/sq/visitor/index.vue'),
    meta: {
      title: "访客"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/sq/login.vue'),
    meta: {
      title: "登录"
    }
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title
  next()
}
)

export default router
