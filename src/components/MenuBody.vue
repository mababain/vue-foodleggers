<template>
  <div class="section-sell-category section-sell-category--beige">
    <div class="section-inner">
      <div class="title">
        {{ title }}
      </div>
      <div class="section-sell-category-items">
        <div class="section-sell-category-item section-sell-category-item--beige">
          <div class="section-sell-category-item-inner">
            <div class="section-sell-category-item__img">
              <img src="img/sell-category/burger-item.jpg" alt="">
            </div>
            <div class="section-sell-category-item__title">
              Burger name max 64 symbols burger burger burger burger
            </div>
            <div class="section-sell-category-item__description">
              Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in
            </div>
            <div class="section-sell-category-item__radios">
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option7" value="a1" class="radio">
                  <span class="radio__text">Option to burger option long option long</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option7" value="a2" class="radio">
                  <span class="radio__text">Option to burger</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option7" value="a3" class="radio">
                  <span class="radio__text">$ 20.20 — 25 cm</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option7" value="a4" class="radio">
                  <span class="radio__text">$ 16.00 — 15 cm</span>
                </label>
              </div>
            </div>
          </div>
          <div class="section-sell-category-item__price-and-button">
            <div class="section-sell-category-item__price">$ 20.20</div>
            <label class="section-sell-category-item__button">
              <input type="checkbox" class="section-sell-category-item__button-checkbox">
              <span class="section-sell-category-item__button-text">Add to cart</span>
            </label>
          </div>
        </div>
        <div class="section-sell-category-item section-sell-category-item--beige">
          <div class="section-sell-category-item-inner">
            <div class="section-sell-category-item__img">
              <img src="img/sell-category/burger-item.jpg" alt="">
            </div>
            <div class="section-sell-category-item__title">
              Burger name max 64 symbols
            </div>
            <div class="section-sell-category-item__description">
              Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
            </div>
            <div class="section-sell-category-item__radios">
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option8" value="a1" class="radio">
                  <span class="radio__text">Option to burger option long option long</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option8" value="a4" class="radio">
                  <span class="radio__text">$ 16.00 — 15 cm</span>
                </label>
              </div>
            </div>
          </div>
          <div class="section-sell-category-item__price-and-button">
            <div class="section-sell-category-item__price">$ 20.20</div>
            <label class="section-sell-category-item__button">
              <input type="checkbox" class="section-sell-category-item__button-checkbox">
              <span class="section-sell-category-item__button-text">Add to cart</span>
            </label>
          </div>
        </div>
        <div class="section-sell-category-item section-sell-category-item--beige">
          <div class="section-sell-category-item-inner">
            <div class="section-sell-category-item__img">
              <img src="img/sell-category/burger-item.jpg" alt="">
            </div>
            <div class="section-sell-category-item__title">
              Burger name max 64 symbols burger burger burger burger
            </div>
            <div class="section-sell-category-item__description">
              Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in
            </div>
            <div class="section-sell-category-item__radios">
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option9" value="a1" class="radio">
                  <span class="radio__text">Option to burger option long option long</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option9" value="a2" class="radio">
                  <span class="radio__text">Option to burger</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option9" value="a3" class="radio">
                  <span class="radio__text">$ 20.20 — 25 cm</span>
                </label>
              </div>
              <div class="section-sell-category-item__radio">
                <label>
                  <input type="radio" name="option9" value="a4" class="radio">
                  <span class="radio__text">$ 16.00 — 15 cm</span>
                </label>
              </div>
            </div>
          </div>
          <div class="section-sell-category-item__price-and-button">
            <div class="section-sell-category-item__price">$ 20.20</div>
            <label class="section-sell-category-item__button">
              <input type="checkbox" class="section-sell-category-item__button-checkbox">
              <span class="section-sell-category-item__button-text">Add to cart</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: ['productName'],
  setup(props) {
    const ucFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)
    const name = ref(props.productName)

    watch(name, () => {
      console.log(name)
    })

    return {
      title: ref(ucFirst(props.productName))
    }
  }
}
</script>

<style scoped>

</style>
