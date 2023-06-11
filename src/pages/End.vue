<template>
  <main>
    <h2>
      <br>
      {{title}}
      <br>
      <p>{{message}}</p>
      <img v-bind:src="$store.state.resultImage">
      <br>
      <button @click='newGame' class="btn btn-default" type="button">
        New Game
      </button>
    </h2>
  </main>
</template>
  
<script>
export default {
  data () {
    return {
      title: "あなたの勝利数：たったの" + this.$store.state.quiz + "回",
      message: this.$store.state.resultMessage
    }
  },
  methods: {
    newGame() {
      this.$router.push('/')
    }
  }
}
</script>
  
<style scoped>
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
}
</style>