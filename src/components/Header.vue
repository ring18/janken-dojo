<template>
  <header>
    <div class="row">
      <router-link to="/">Home</router-link>
      <!--<router-link to="/quiz1">Quiz1</router-link>
      <router-link to="/quiz2">Quiz2</router-link>
      <router-link to="/quiz3">Quiz3</router-link>
      <router-link to="/quiz4">Quiz4</router-link>
      <router-link to="/quiz5">Quiz5</router-link>
      <router-link to="/end">End</router-link>-->
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: "ヘッダー"
    }
  }
}
</script>

<style scoped>
header {
  padding: 1.8em 5%;
  background: #778899;
}
header .row {
  text-align: right;
}
header a {
  color: #fff;
  text-decoration: none;
  margin-left: 2em;
}
header a:hover {
  text-decoration: underline;
}
h1 {
  margin: 0;
  color: #fff;
}
</style>