<template>
  <main>
    <h2>
      <br>
      {{title}}{{quiz_num}}
      <br>
      <img v-bind:src="$store.state.handImage">
      <br>
      <!--<button v-on:click="testImageChangeMethod">testImageChange</button>-->
      <br>
      <span>{{min}}:{{sec}}</span>
      <br>
      <button @click='nextQuiz' class="btn-default" type="button" :disabled="isActive">
        next!
      </button>
      <br>
      <button @click="judge(0)"><!--グーボタン-->
      グー     
      </button>
      <button @click="judge(1)"><!--チョキボタン-->
      チョキ     
      </button>
      <button @click="judge(2)"><!--パーボタン-->
      パー  
      </button>
      <br>
      <p>{{$store.state.missionMessage}}</p><!--勝敗表示-->
    </h2>
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: "Quiz",//***********いまの問題番号***********//
      handImage: require('../assets/janken_gu.png'),
      rockImage: require('../assets/janken_gu.png'),
      scissorsImage: require('../assets/janken_choki.png'),
      paperImage: require('../assets/janken_pa.png'),
      result: "勝ってください",
      resultNum: 0,
      isActive: true
    }
  },
  components: {
  },
  computed: {
    quiz_num(){
      return this.$store.state.quiz + 1
    },
    min() {
      var minutes = Math.floor(this.$store.state.timeCounter / 60)
      // 2桁に揃えて表示。3桁になると切れるが、100分はしないと思うので大丈夫？
      return ('00' + minutes).slice(-2)
    },
    sec() {
      var seconds = this.$store.state.timeCounter % 60
      return ('00' + seconds).slice(-2)
    }
  },
  methods: {
    nextQuiz() {
      this.isActive = true;
      this.$store.commit('ImageChange');
      this.$store.commit('changeMissionMessage');
      this.$router.push('/quiz2');//Quiz1のあとはQuiz2に遷移
    },
    testImageChangeMethod(){//手動での手変更, いつか消す
      var rand = Math.floor(Math.random() * 3);
      if (rand === 0) {
          this.$store.state.handImage=this.rockImage;
      }else if (rand === 1) {
          this.$store.state.handImage=this.scissorsImage;
      }else if (rand === 2) {
          this.$store.state.handImage=this.paperImage;
      }
    },
    judge(myHand){//storeの手の乱数randと押されたボタンを比較して判定
        if((this.$store.state.rand===0 && myHand === 2)||(this.$store.state.rand===1 && myHand === 0)||(this.$store.state.rand===2 && myHand === 1)){
            this.$store.state.missionMessage = "勝ち";
            this.isActive=false;
        }else if (this.$store.state.rand===myHand){
            this.$store.state.missionMessage = "あいこ";
        }else{
            this.$store.state.missionMessage = "負け";
        }
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
img{
  width:  40%;
  height: 40%;
}
h2 {
  margin: 0;
}
</style>