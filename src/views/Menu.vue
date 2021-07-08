<template>
  <div class="section-sell-category section-sell-category--beige">
    <div class="section-inner">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-sell-category-items">
        <div class="section-sell-category-item section-sell-category-item--beige" v-for="(item, idx) in menu.listItems" :key="idx">
          <div class="section-sell-category-item-inner">
            <div class="section-sell-category-item__img">
              <img src="img/sell-category/burger-item.jpg" alt="">
            </div>
            <div class="section-sell-category-item__title">
              {{ item.name }}
            </div>
            <div class="section-sell-category-item__description">
              {{ item.description }}
            </div>
            <div class="section-sell-category-item__radios">
              <div class="section-sell-category-item__radio" v-for="option in item.options" :key="option.size">
                <label>
                  <input type="radio" :name="item.name" :value="option.price" class="radio">
                  <span class="radio__text">{{ option.price + option.size }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="section-sell-category-item__price-and-button">
            <div class="section-sell-category-item__price">$ 20.20</div>
            <label class="section-sell-category-item__button">
              <input type="checkbox" class="section-sell-category-item__button-checkbox">
              <span class="section-sell-category-item__button-text">Добавить в корзину</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['productName'],
  setup(props) {
    const ucFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
    const store = useStore()
    const menu = computed(() => store.state.products.find(el => el.listTitle === props.productName))
    console.log(menu.value.listTitle)

    return {
      menu,
      title: computed(() => ucFirst(menu.value.listTitle))
    }
  }
}
</script>

<style scoped>

</style>
