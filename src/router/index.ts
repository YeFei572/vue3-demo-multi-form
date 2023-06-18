import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/home/HomeView.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/about/index.vue')
    },
  ]
})

const whiteList = ['/login', '/register', '/404', '/401']
// 路由拦截器
router.beforeEach(async (to) => {
  console.log("路由拦截器")
  // 如果没有token，则直接返回到登录页
  if (!localStorage.getItem('token')) {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.path}`
    } else {
      return true
    }
  } else {
    return true
  }
})

export default router
