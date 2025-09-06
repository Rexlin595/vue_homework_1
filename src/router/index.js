import { createRouter, createWebHistory } from 'vue-router'

import ProductListView from '../views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 2. 新增這個物件，將根路徑 '/' 指向您的商品列表元件
      path: '/',
      name: 'home', // 或 'products'
      component: ProductListView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
