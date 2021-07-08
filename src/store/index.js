import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        listTitle: 'burgers',
        listItems: [
          {
            name: 'Burger Ultra',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            options: [
              {
                price: 450,
                size: 'Большой'
              },
              {
                price: 350,
                size: 'Средний'
              },
              {
                price: 250,
                size: 'Маленький'
              }
            ]
          },
          {
            name: 'Burger Black',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in',
            options: [
              {
                price: 550,
                size: 'Большой'
              },
              {
                price: 450,
                size: 'Средний'
              },
              {
                price: 350,
                size: 'Маленький'
              }
            ]
          }
        ]
      },
      {
        listTitle: 'pizza',
        listItems: [
          {
            name: 'Pizza Ultra',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            options: [
              {
                price: 450,
                size: 'Большой'
              },
              {
                price: 350,
                size: 'Средний'
              },
              {
                price: 250,
                size: 'Маленький'
              }
            ]
          },
          {
            name: 'Pizza Black',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in',
            options: [
              {
                price: 550,
                size: 'Большой'
              },
              {
                price: 450,
                size: 'Средний'
              },
              {
                price: 350,
                size: 'Маленький'
              }
            ]
          }
        ]
      },
      {
        listTitle: 'coffee',
        listItems: [
          {
            name: 'Coffee Ultra',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            options: [
              {
                price: 450,
                size: 'Большой'
              },
              {
                price: 350,
                size: 'Средний'
              },
              {
                price: 250,
                size: 'Маленький'
              }
            ]
          },
          {
            name: 'Coffee Black',
            description: 'Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in',
            options: [
              {
                price: 550,
                size: 'Большой'
              },
              {
                price: 450,
                size: 'Средний'
              },
              {
                price: 350,
                size: 'Маленький'
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    products(state) {
      return state.products
    }
  },
  modules: {
  }
})
