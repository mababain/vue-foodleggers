
<template>
  <span class="section-cart-item__count-minus"></span>
  <input type="number" class="section-cart-item__count-input" v-model="count">
  <span class="section-cart-item__count-plus"></span>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: ['countValue'],
  setup(props) {
    const count = ref(props.countValue)
    watch(count, () => {
      if (count.value < 0) {
        count.value = 1
      } else if (count.value > 999) {
        count.value = 999
      }
    })
    return {
      count
    }
  }
}
</script>

<style scoped>

</style>
