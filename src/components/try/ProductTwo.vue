<template>
  <div>
    <h4>Product List Two</h4>
    <ul>
      <li v-for="product in saleProducts">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "product-two",
    computed: {
      products() {
        return this.$store.state.products
      },
      saleProducts() {
        return this.$store.getters.saleProducts
      }
    }
  }
</script>

<style scoped>

</style>
