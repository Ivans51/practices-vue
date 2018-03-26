<template>
  <div>
    <h4>Product List One</h4>
    <ul>
      <li v-for="product in products">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)" class="btn-primary">Reduce Price</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    name: "product-one",
    computed: {
      products() {
        return this.$store.state.products
      },
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods: {
      reducePrice: function (amount) {
        //this.$store.commit('reducePrice')
        this.$store.dispatch('reducePrice', amount)
      },
      ...mapActions([
        'reducePrice'
      ])
    }
  }
</script>

<style scoped>

</style>
