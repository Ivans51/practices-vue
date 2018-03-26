<template>
  <header>
    <div class="container-menu">
      <div class="menu container d-flex">
        <router-link to="/Home" class="">
          <img src="/static/img/logo-kotlin.png" alt="logo-kotlin">
        </router-link>
        <nav class="d-flex align-items-center ml-auto">
          <div class="navigation mr-2" v-for="item in items">
            <router-link v-on:click="deleteHead" :to="'/Home/' + item.name" tag="a">{{item.name}}</router-link>
          </div>
          <router-link to="/Home/Search" class="">
            <img src="/static/img/icon-search.png" alt="image-search" class="ml-3">
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HomeTop",
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteHead: function () {
        this.items.pop();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../static/css/resources";

  header {
    cursor: default;
    background-image: $image-home;
    height: 200px;
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
