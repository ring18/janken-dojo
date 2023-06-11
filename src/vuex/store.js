//import Vue from 'vue'
//import Vuex from 'vuex'
import router from '../router'
//Vue.use(Vuex)
//import { createApp } from 'vue'
import { createStore } from 'vuex'


const state = {
    debug: true,
    started: false,
    stopped: false,
    interval: null,     // タイマを動かしたり止めたりするための変数的な？？
    timeCounter: 30,
    rand: 0,//何の手を出しているかを表す(0:グー, 1:チョキ, 2:パー)
    handImage: require('../assets/janken_gu.png'),
    rockImage: require('../assets/janken_gu.png'),
    scissorsImage: require('../assets/janken_choki.png'),
    paperImage: require('../assets/janken_pa.png'),
    quiz: 0,//ImageChange呼び出される度+1される, 問題数数えられるかも？
    missionMessage: "勝ってください",
    randResult: 0,
    resultImage: require('../assets/omen_tengu.png'),
    resultMessage: "判断が遅い！！",
    tenguImage: require('../assets/omen_tengu.png'),//元ネタ：鬼滅の刃
    soccerImage: require('../assets/kid_job_boy_soccer.png'),//元ネタ：本田とじゃんけん
    teacherImage: require('../assets/job_teacher_man.png'),//元ネタ：林修
    girlImage: require('../assets/character_girl_color9_pink.png'),//元ネタ：何でも言うことをきいてくれるアカネチャン
    tennisImage: require('../assets/sports_tennis.png'),//元ネタ：松岡修造
    soccer2Image: require('../assets/sports_soccer_pass_man.png'),//元ネタ：本田とじゃんけん
    question: 5,//問題数、問題を追加したら1増やす
    mission: 0
}

function gameFinish (state) {
    state.started = false
    state.stopped = true
    state.timeCounter = 6000
    state.randResult = Math.floor(Math.random() * 7)
    if (state.randResult === 0) {
      state.resultImage=state.tenguImage
      state.resultMessage="判断が遅い！"
    }else if (state.randResult === 1) {
      state.resultImage=state.soccerImage
      state.resultMessage="何でこうなったか、明日までに考えといて下さい。そしたら何かが見えてくるはずです（ｷﾘｯ"
    }else if (state.randResult === 2) {
      state.resultImage=state.soccerImage
      state.resultMessage="たかがじゃんけん、そう思ってないですか？それやったら次もこうなりますよw"
    }else if (state.randResult === 3){
      state.resultImage=state.soccerImage
      state.resultMessage="失敗は次に繋がるチャンスです。ネバーギブアップ！（笑）"
    }else if (state.randResult === 4){
      state.resultImage=state.teacherImage
      state.resultMessage="いつドヤるか？今でしょ (　・´ｰ・｀)ﾄﾞﾔｧ･･･"
    }else if (state.randResult === 5){
      state.resultImage=state.girlImage
      state.resultMessage="あほくさ やめたら？このゲーム"
    }else if (state.randResult === 6){
      state.resultImage=state.tennisImage
      state.resultMessage="もっと、熱くなれよおおおおおおおおおおおお！！！"
    }else if (state.randResult === 7){
      state.resultImage=state.soccer2Image
      state.resultMessage="頑張ってるやん！次は俺に勝ってみせて"
    }
    router.push('/end')
}

// 1ずつタイマの数字を減らすための関数
function tick (state) {
    if (state.timeCounter <= 0) {
      clearInterval(state.interval)
      gameFinish(state)
    }
    state.timeCounter--
}

const mutations = {
    timerStart(state) {
        clearInterval(state.interval)
        state.started = true
        state.stopped = false
        state.timeCounter = 120     // ここで制限時間を秒で指定できます
        state.interval = setInterval(() => tick(state), 1000)
    },
    ImageChange(state){//nextが押される度に呼び出す, 仕組みは上のtimerStartと同じ
      state.rand = Math.floor(Math.random() * 3);
      state.quiz++;
      if (state.rand === 0) {
          state.handImage=state.rockImage;
      }else if (state.rand === 1) {
          state.handImage=state.scissorsImage;
      }else if (state.rand === 2) {
          state.handImage=state.paperImage;
      }
    },
    initMissionMessage(state){
        state.mission = 0;
        state.missionMessage = "勝ってください";
    },
    changeQuizNumber(){
      this.quiz += 1;
    },
    changeMissionMessage(state){//この関数うまく使えば
        state.mission = Math.floor(Math.random() * 3);
        if(state.mission===0){
            state.missionMessage = "勝ってください";
        }else if(state.mission===1){
            state.missionMessage = "負けてください";
        }else if(state.mission===2){
            state.missionMessage = "負けさせてください";
        }
    },
    Initialization(state){//初期化
      state.quiz = 0
    }
}

const store = createStore({
    state: state,
    mutations: mutations
})

export default store