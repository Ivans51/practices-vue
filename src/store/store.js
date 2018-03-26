import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Banana', price: 2000},
      {name: 'Apple', price: 400},
      {name: 'Pear', price: 2400}
    ]
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: "**" + product.name + "",
          price: product.price / 2,
        }
      })
    }
  },
  mutations: {
    reducePrice: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount;
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload);
      }, 2000)
    }
  }
});
