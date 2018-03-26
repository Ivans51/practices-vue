<template>
  <div class="hello">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        title: "Ir al home"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/Styles.css';
</style>
