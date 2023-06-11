<template>
  <main>
    <h2>
      {{title}}
      <br>
      <button @click='gameStart' class="btn btn-default" type="button">
        game start!
      </button>
    </h2>
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: "ホーム画面"
    }
  },
  methods: {
    /*
     *  game startボタンを押すとこの関数が実行される。
     *  ゲームスタート時の初期化処理をgameStart()内で呼ぶ
     */
    gameStart() {
      this.$store.commit('ImageChange')
      this.$store.commit('Initialization')
      this.$store.commit('timerStart')
      this.$store.commit('initMissionMessage')
      //this.$store.commit('changeQuizNumber')
      this.$router.push('/quiz1')
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