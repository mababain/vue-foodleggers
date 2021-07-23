<template>
  <div class="section-cart-item">
    <div class="section-cart-item-image">
      <img :src="item.imageSrc" :alt="item.name">
    </div>
    <div class="section-cart-item-content">
      <div class="section-cart-item-content--left">
        <div class="section-cart-item__title">
          {{ item.name }}
        </div><div class="section-cart-item__size">
        {{ item.options.size }}
      </div>
        <textarea class="section-cart-item__comment" placeholder="Комментарий"></textarea>
      </div>
      <div class="section-cart-item-content--right">
        <div class="section-cart-item__count">
          <cart-counter :count-value="item.count"></cart-counter>
        </div>
        <div class="section-cart-item__price">{{ item.options.price * item.count }} ₽</div>
        <div class="section-cart-item__delete-button">
          del
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCounter from '@/components/cart/CartCounter'
export default {
  components: { CartCounter },
  props: ['item']
}
</script>

<style scoped>

</style>
