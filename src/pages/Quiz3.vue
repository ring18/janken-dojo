<template>
  <main>
    <h2>
      <br>
      {{title}}{{quiz_num}}
      <br>
      <img v-bind:src="$store.state.handImage">
      <br>
      <span>{{min}}:{{sec}}</span>
      <br>
      <button @click='nextQuiz' class="btn-default" type="button" :disabled="isActive">
        next!
      </button>
      <br>
      <button ref="rock" id="rock" @click="judge(0)"><!--グーボタン-->
      グー     
      </button>
      <button ref="scissors" id="scissors" @click="judge(1)"><!--チョキボタン-->
      チョキ     
      </button>
      <button ref="paper" id="paper" @click="judge(2)"><!--パーボタン-->
      パー  
      </button>
      <br>
      <p>{{$store.state.missionMessage}}</p><!--勝敗表示-->
      <p>{{result}}</p>
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
      result: "ボタンは探してね☆",
      resultNum: 0,
      isActive: true
    }
  },
  mounted () {  // 初期化時に実行される（らしい）
    // ボタンの位置をランダムに決める
    var rockButton = this.$refs.rock;   // htmlにref="name"と書くとthis.$refs.nameでオブジェクト取得できる
    var scissorsButton = this.$refs.scissors;
    var paperButton = this.$refs.paper;
    var topLimit = window.innerHeight - rockButton.getBoundingClientRect().height;
    var leftLimit = window.innerWidth - rockButton.getBoundingClientRect().width;

    rockButton.style.position = "absolute";
    rockButton.style.top = Math.floor(Math.random() * topLimit) + "px";
    rockButton.style.left = Math.floor(Math.random() * leftLimit) + "px";

    scissorsButton.style.position = "absolute";
    scissorsButton.style.top = Math.floor(Math.random() * topLimit) + "px";
    scissorsButton.style.left = Math.floor(Math.random() * leftLimit) + "px";

    paperButton.style.position = "absolute";
    paperButton.style.top = Math.floor(Math.random() * topLimit) + "px";
    paperButton.style.left = Math.floor(Math.random() * leftLimit) + "px";
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
      this.$store.commit('initMissionMessage');
      var nextQ = Math.floor(Math.random()*this.$store.state.question) +1;//問題番号のランダム生成
      this.$router.push('/quiz'+String(nextQ));//次の問題
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
#rock {
    /* 開発時はコメントアウトしたほうがいいかも。めんどくさいので */
    color: transparent;
    background: transparent;
    border: transparent;
}
/* #id:hoverでマウスオーバー時のcssを指定できる（idはhtmlのタグ内で指定） */
#rock:hover {
    color: white;
    background: black;
    border: black;
}
#scissors {
    /* 開発時はコメントアウトしたほうがいいかも。めんどくさいので */
    color: transparent;
    background: transparent;
    border: transparent;
}
#scissors:hover {
    color: white;
    background: black;
    border: black;
}
#paper {
    /* 開発時はコメントアウトしたほうがいいかも。めんどくさいので */
    color: transparent;
    background: transparent;
    border: transparent;
}
#paper:hover {
    color: white;
    background: black;
    border: black;
}
</style>