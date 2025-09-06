<template>
  <!-- 商品列表區 -->
  <div class="col-md-8">
    <h2 class="mb-3">商品列表</h2>
    <div class="row">
      <div v-for="products in products" :key="products.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="products.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ products.name }}</h5>
            <p class="card-text">{{ products.description }}</p>
            <p class="fw-bold text-primary">${{ products.price }}</p>
            <button class="btn btn-success w-100" @click="handleCarts(products)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, inject } from 'vue'
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
console.log('Component props:', props)
const emit = defineEmits(['add-cart'])
const handleCarts = (product) => {
  emit('add-cart', product)
  showNotification(`商品 ${product.name} 已加入購物車`)
}
const showNotification = inject('showNotification')
</script>
