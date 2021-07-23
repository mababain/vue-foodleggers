<template>
  <div class="section-cart">
    <div class="section-inner">
      <div class="title">
        {{ cart.items.length ? 'Ваш заказ' : 'Корзина пуста' }}
      </div>
      <div class="section-cart-items">
        <cart-item v-for="(item, idx) in cart.items" :key="idx" :item="item"></cart-item>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import CartItem from '@/components/cart/CartItem'

export default {
  components: { CartItem },
  setup() {
    const store = useStore()

    return {
      cart: store.getters['cart/cart']
    }
  }
}
</script>

<style scoped>

</style>
