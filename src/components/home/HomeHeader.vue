<template>
  <header>
    <div class="container-menu">
      <div class="menu container d-flex">
        <router-link to="/Home" class="">
          <img src="/static/img/logo-kotlin.png" alt="logo-kotlin">
        </router-link>
        <nav class="d-flex align-items-center ml-auto">
          <div class="navigation">
            <router-link to="/Home/Learn" tag="a">Learn</router-link>
            <router-link to="/Home/Community" tag="a">Community</router-link>
            <router-link to="/Home/Try" tag="a">Try</router-link>
          </div>
          <router-link to="/Search" class="">
            <img src="/static/img/icon-search.png" alt="image-search" class="ml-3">
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style scoped lang="scss">
  @import "../../../static/css/resources";

  header {
    cursor: default;
    background-image: $image-home;
    height: 400px;
    .container-menu {
      height: 50px;
      background: $color-secondary;
      padding: 8px 0;
      nav {
        a {
          color: #FFFFFF;
          font-weight: bold;
        }
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
