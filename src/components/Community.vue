<template>
  <div class="community p-3">
    <h3 class="text-center">Title</h3>
    <div v-for="post of posts" :key="post.id">
      <p>{{post.userId}} - {{post.title}}</p>
      <p class="text-justify">{{post.body}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "community",
    created() {
      this.getPosts();
    },
    data() {
      return {
        posts: []
      }
    },
    methods: {
      getPosts: function () {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then(response => {
          this.posts = response.data;
          console.log(response.data);
        }).catch(e => {
          this.errors.push(e);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .community {
    background-color: #393939;
    p, h3 {
      color: white;
      margin: 0;
    }
  }
</style>
