<template>
  <div>
    <!--<p>{{nameUser}}</p>
    <h2>{{myDetails()}}</h2>
    <div class="alert alert-info">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <strong>Title!</strong> Alert body ...
    </div>
    <ul>
      <li v-repeat="items">
        {{nameUser}} - {{$index}} &#45;&#45; {{nameFruit}}
      </li>
    </ul>
    <div>
      &lt;!&ndash;<a v-on="onkeyup | key 12">Trigger Event</a>&ndash;&gt;
      <ul v-repeat="item in items">
        &lt;!&ndash;<li v-on="click toggle(item)">Trigger Event</li>&ndash;&gt;
      </ul>
    </div>-->
    <home-header></home-header>
    <router-view></router-view>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import homeHeader from './../home/HomeHeader';
  import homeFooter from './../home/HomeFooter';

  export default {
    name: "Home",
    components: {
      homeHeader,
      homeFooter
    },
    data() {
      return {
        nameUser: "Ivan",
        lastName: "Del",
        key: 12,
        n: 0,
        items: [
          {nameFruit: "Orange", sell: "20000", done: false},
          {nameFruit: "Apple", sell: "14000", done: true}
        ]
      }
    },
    method: {
      myDetails() {
        return "My name is " + this.nameUser
      },
      toggle: function (item) {
        item.done = !item.done
      }
    },
    computed: {
      fullName: {
        get: function () {
          return this.nameUser + " - " + this.lastName
        },
        set: function (name) {
          const fName = name.split(" ");
          this.firstName = fName[0];
          this.lastName = fName[1];
        }
      }
    }
  }
</script>

<style scoped>

</style>
