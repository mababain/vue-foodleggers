<template>
  <div class="section-sell-category-item section-sell-category-item--beige">
    <div class="section-sell-category-item-inner">
      <div class="section-sell-category-item__img">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="section-sell-category-item__title">
        {{ product.name }}
      </div>
      <div class="section-sell-category-item__description">
        {{ product.description }}
      </div>
      <div class="section-sell-category-item__radios">
        <div class="section-sell-category-item__radio" v-for="option in product.options" :key="option.id">
          <label>
            <input type="radio" :name="product.name" :value="option.id" class="radio" v-model="choisedOption">
            <span class="radio__text">{{ `${option.price} ₽ - ${option.size}` }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="section-sell-category-item__choice-message" v-if="choisedOption === null">
      Выберите размер
    </div>
    <div class="section-sell-category-item__price-and-button" v-else>
      <div class="section-sell-category-item__price" @click="log">{{ product.options.find(el => el.id === choisedOption).price }} ₽</div>
      <button class="section-sell-category-item__button" @click="add">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['product'],
  setup(props) {
    const store = useStore()
    const choisedOption = ref(null)

    const add = () => {
      const payload = {
        ...props.product,
        options: props.product.options.find(el => el.id === choisedOption.value),
        count: 1
      }
      store.commit('cart/addInCart', payload)
    }

    return {
      choisedOption,
      add
    }
  }
}
</script>

<style scoped>

</style>
