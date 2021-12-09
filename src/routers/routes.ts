export const routes = [
  {
    path: '/',
    component: () => import('../page/home/index.vue')
  },
  {
    path: '/test',
    component: () => import('../page/test/index.vue')
  },
]