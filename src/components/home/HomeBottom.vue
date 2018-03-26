<template>
  <footer class="d-flex p-3 align-items-center">
    <p>Licensed under the Apache 2 license </p>
    <div class="ml-auto d-flex align-items-center">
      <p>Sponsored and developed by</p>
      <router-link tag="a" class="image-foot d-block ml-3" to="/Home"></router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "HomeBottom"
  }
</script>

<style scoped lang="scss">
  footer {
    background: #1a1a1a;
    position: fixed;
    bottom: 0;
    width: 100%;
    .image-foot {
      background-image: url("/static/img/JetBrains_Logo.svg");
      background-size: cover;
      width: 60px;
      height: 40px;
    }
    p {
      color: white;
      margin: 0;
    }
  }
</style>
