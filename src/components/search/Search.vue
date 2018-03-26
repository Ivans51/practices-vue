<template>
  <div>
    kilometers: <input type="text" v-model="kilometers">
    meters: <input type="text" v-model="meters">
    <hr>
    Search
    <component v-bind:is="component"></component>
    <button v-on:click="component='formOne'">Form one</button>
    <button v-on:click="component='formTwo'">Form two</button>

    <input type="text" placeholder="Enter name" @keyup.enter="showinputvalue">
    <h3>{{name}}</h3>

    <input type="button" @click.once="buttonClick" value="Increment one">
    <h3>{{count}}</h3>
  </div>
</template>

<script>
  import formOne from './FormOne'
  import formTwo from './FormTwo'

  export default {
    components: {
      'formOne': formOne,
      'formTwo': formTwo
    },
    name: "search",
    data() {
      return {
        component: 'formTwo',
        kilometers: 0,
        meters: 0,
        count: 0,
        name: '',
        styleobj: {
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          boxSizing: "border-box"
        }
      }
    },
    methods: {
      buttonClick: function () {
        return this.count++;
      },
      showinputvalue: function (event) {
        this.name = event.target.value;
      }
    },
    watch: {
      kilometers: function (val) {
        this.kilometers = val;
        this.meters = val * 1000;
      },
      meters: function (val) {
        this.kilometers = val / 1000;
        this.meters = val;
      }
    }
  }
</script>

<style scoped>

</style>
