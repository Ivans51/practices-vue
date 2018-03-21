<template>
  <div class="hello">
    <router-view></router-view>
  </div>
</template>

<script>
  import homeHeader from './home/HomeHeader';
  import homeFooter from './home/HomeFooter';
  export default {
    name: 'Index',
    data() {
      return {
        title: "Ir al home",
        hreflink: "http://www.google.com"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/Styles.css';
</style>
