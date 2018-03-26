<template>
  <div>
    <button v-on:click="available = !available" v-bind:class="{available: available}">Error Page</button>
  </div>
</template>

<script>
  export default {
    name: "error404",
    data() {
      return {
        available : ''
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    background: red;
    color: white;
  }
  .available {
    background: blueviolet;
  }
</style>
