<template>
  <div class="learn">
    <form method="post" @submit.prevent="sendPost" class="container pt-5 pb-5">
      <h2 class="">Form send data</h2>
      <label for="lastName"></label>
      <input type="text" id="lastName" v-model="postBody.title" placeholder="Last Name">
      <p>{{lastName}}</p>
      <label for="phones"></label>
      <select name="phones" id="phones" v-model="postBody.body" :required=true>
        <option :selected="true">Choose body</option>
        <option v-for="phone in listPhones" v-bind:value="phone">
          {{phone}}
        </option>
      </select>
      <p>{{postBody.body}}</p>
      <label for="postBody"></label>
      <input type="text" v-model="postBody.userId" id="postBody" placeholder="Enter userId">
      <button type="button" id="button" class="btn-primary">Send Value</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "learn",
    data() {
      return {
        lastName: '',
        selected: "LG",
        listPhones: [
          "Nokia", "LG", "Samsung"
        ],
        postBody : {
          title: '',
          body: '',
          userId: ''
        }
      }
    },
    method: {
      sendPost: function () {
        axios({
          method: 'POST',
          url: "https://jsonplaceholder.typicode.com/posts",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          data: this.postBody
        }).then(response => {
          alert("Success " + response.data);
        }).catch(e => {
          alert("Error " + e)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .learn {
    background: #393939;
    input {
      font-size: 12px;
      background-color: #CCC;
      border-right: 0;
      border-top: 0;
      border-left: 0;
      outline: none;
      padding: 2px 10px;
    }
    button {
      cursor: pointer;
      font-size: 12px;
    }
    label, h2 {
      color: white;
    }
  }
</style>
