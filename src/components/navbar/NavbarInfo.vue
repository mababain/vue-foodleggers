<template>
  <div class="section-outer section-header-main">
    <div class="section-inner">
      <div class="section-header-main-logo">
        <mobile-menu></mobile-menu>
        <div class="logo-img">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="section-header-main-text">Shop name</div>
      </div>
      <a href="tel:+1554443333" class="section-header-main-tel">
        <svg class="tel">
          <use xlink:href="#tel"></use>
        </svg>
        <div class="section-header-main-tel-text">
          +1 555 444 3333
        </div>
      </a>
      <a href="mailto:demo-store@example.com" class="section-header-main-mail">
        <svg class="mail">
          <use xlink:href="#mail"></use>
        </svg>
        <div class="section-header-main-mail-text">
          demo-store@example.com
        </div>
      </a>
      <div class="section-header-main-shopping-cart">
        <svg class="shopping-cart">
          <use xlink:href="#shopping-cart"></use>
        </svg>
        <div class="section-header-main-shopping-cart-text">
          100 324 ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from '@/components/navbar/MobileMenu'
export default {
  components: { MobileMenu }
}
</script>

<style scoped>

</style>
