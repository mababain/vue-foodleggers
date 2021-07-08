<template>
  <div class="section-header-product-links section-header-product-links--main-active">
    <div class="section-header-product-links-wrapper">
      <div v-for="(product, idx) in products" :key="idx" class="section-header-product-link">
        <router-link :to="'/menu/' + product.listTitle">{{ product.listTitle }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      products: computed(() => store.getters.products)
    }
  }
}
</script>

<style scoped>

</style>
