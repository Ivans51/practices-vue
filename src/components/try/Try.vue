<template>
  <div>
    <product-one></product-one>
    <product-two></product-two>
  </div>
</template>

<script>
  import ProductOne from './ProductOne'
  import ProductTwo from './ProductTwo'

  export default {
    components: {
      ProductTwo,
      ProductOne
    },
    name: "try",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
