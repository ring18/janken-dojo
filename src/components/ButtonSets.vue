eslint-disable no-console

<template>
  <div>
    <button @click="judge(0)"> 
    グー     
    </button>
    <button @click="judge(1)">
    チョキ     
    </button>
    <button @click="judge(2)">
    パー  
    </button>
    <br>
    <p>{{result}}</p>
  </div>

</template>

<style scoped>
</style>

<script>
import store from '../vuex/store'
export default { 
  data(){
    return{
      result: "勝ってください",
      resultNum: 0
    }
  },
  methods:{
    judge(myHand){//storeの手の乱数randと押されたボタンを比較して判定
        if((this.$store.state.rand===0 && myHand === 2)||(this.$store.state.rand===1 && myHand === 0)||(this.$store.state.rand===2 && myHand === 1)){
            this.result = "勝ち"
            this.resultNum=1
        }else if (this.$store.state.rand===myHand){
            this.result = "あいこ"
            return false
        }else{
            this.result = "負け"
            return false
        }
    }
  }
}
</script>
