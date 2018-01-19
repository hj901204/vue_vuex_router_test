<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <ul>
      <li><router-link :to="{name:'Count1'}">计数器 1</router-link></li>
      <li><router-link :to="{name:'Count2'}">计数器 2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vuex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
