<template>
  <div id="app" class="container py-4">
    <div class="row">
      <!-- 商品列表區 -->
      <ProductList :products="products" @add-cart="addCart" />
      <!-- 購物車區 -->
      <Cart :carts="carts" @remove-cart="removeCart" />
      <!-- 通知元件 -->
      <Notification />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, reactive } from 'vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
import Notification from './components/Notification.vue'

const products = ref([
  // 商品資料
  {
    id: 1,
    name: '耳罩式藍牙耳機',
    description: '舒適配戴，支援降噪技術',
    price: 2490,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: '耳罩式彩虹耳機',
    description: '舒適配戴，支援降噪技術',
    price: 1380,
    image:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: '時尚藍牙耳機',
    description: '舒適配戴，支援降噪技術',
    price: 7990,
    image:
      'https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: '機械式鍵盤',
    description: '紅軸機械鍵盤，打字手感極佳',
    price: 1890,
    image:
      'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: '無線滑鼠',
    description: '靜音按鍵設計，長效電池',
    price: 890,
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
])

const carts = ref([])
const addCart = (product) => {
  const existProduct = carts.value.find((c) => c.id === product.id)
  if (existProduct) {
    existProduct.quantity++
  } else {
    carts.value.push({
      ...product,
      quantity: 1,
    })
  }
}
const removeCart = (item) => {
  carts.value = carts.value.filter((c) => c.id !== item.id)
}
// 通知系統 (使用 provide/inject)
const notificationState = reactive({
  message: '',
  isShow: false,
})

// 顯示通知
const showNotification = (message) => {
  // 設定內容
  notificationState.message = message
  notificationState.isShow = true

  // 2 秒後自動關閉
  setTimeout(() => {
    notificationState.isShow = false
  }, 2000)
}
provide('notificationState', notificationState)
provide('showNotification', showNotification)
</script>
