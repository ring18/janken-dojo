<template>
  <div id="app">
    <Header />
    <router-view />
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
//import ButtonSets from './components/ButtonSets.vue'
import store from './vuex/store'

export default {
  name: 'App',
  components: {
    Header
  },
  store
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
