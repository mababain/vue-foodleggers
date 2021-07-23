import { isIdsSample } from '@/utils/isIdsSample'

export default {
  namespaced: true,
  state() {
    return {
      cart: {
        price: 0,
        items: []
      }
    }
  },
  mutations: {
    addInCart(state, product) {
      const res = state
        .cart
        .items
        .find(el => isIdsSample(el, product))
      if (res) {
        state.cart.items = state.cart.items.map(el => {
          return isIdsSample(el, product)
            ? { ...el, count: ++el.count }
            : el
        })
      } else {
        state.cart.items.push(product)
      }
      state.cart.price += product.options.price
    },
    incrementCounter(state, id) {

    }
  },
  getters: {
    cart(state) {
      return state.cart
    },
    cartPrice(state) {
      return state.cart.price
    }
  }
}
