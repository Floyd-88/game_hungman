<template>
    <div class="modal_fone" v-if="isLose || isWin">
    <div class="modal_window">
        <div class="wrapper_text_model_window" :class="{'bg_win': isWin, 'bg_lose': isLose}">
            <div v-if="isWin" class="end_text win_text">
                Поздравляем, Вы победили!!!
            </div>
            <div v-else-if="isLose" class="end_text not_win_text" >
               <p class="loser">Вы прогирали!!!</p> 
               <p class="loser">Загаданное имя - <span>{{store.getters.getWord}}</span></p> 
            </div>
            <button class="restart_game" @click="restartGame()">Сыграть еще раз</button>
        </div>
    </div>
  </div>
</template>
   
<script lang="ts" setup>
import {defineProps} from 'vue'
import {useStore} from 'vuex'
import {restartGame} from '../composables/RestartGame'
const store = useStore();


defineProps({
    isLose: {
        type: Boolean,
        required: true,
        default: false
    },
    isWin: {
        type: Boolean,
        required: true,
        default: false
    }
})
</script>
   
<style lang="sass" scoped>
@import '../assets/styles/main'
   
.modal_fone 
  display: flex
  position: fixed
  background: rgba(0, 0, 0, 0.7)
  top: 0
  left: 0
  right: 0
  bottom: 0
  align-items: center
  justify-content: center
  z-index: 3
  overflow: auto


.modal_window 
  position: relative
  width: max-content
  height: max-content
  border-radius: 5px
  background: whitesmoke
  box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 70%)
  overflow-y: auto
  overflow-x: hidden

.wrapper_text_model_window
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 400px
    height: 200px
    background-size: cover

.end_text
    padding: 15px
    font-size: 26px
    font-family: fantasy
    font-weight: 100

.win_text
    color: dodgerblue

.loser
    margin: 0
    color: black

.bg_win
    background-image: url(http://localhost:8080/img/win.48c6ddf6.jpg)

.bg_lose
    background-image: url(/src/assets/img/loser.jpg)

.restart_game 
    font-size: 14px
    text-decoration: none
    cursor: pointer
    display:block
    width:140px
    height: 30px
    font-weight: bold
    margin:20px auto
    text-align:center
    padding: 1px 5px
    color: #717171
    -webkit-border-radius: 4px
    -moz-border-radius: 4px
    border-radius: 4px
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3)
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)
    -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)
    background: #f6f6f6
    background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#d4d4d4))
    background: -webkit-linear-gradient(#f6f6f6, #d4d4d4)
    background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4)
    background-image: -moz-gradient(top, #f6f6f6, #d4d4d4)
    border: 1px solid #a1a1a1

.restart_game:hover 
    background: #f6f6f6
    background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#ececec))
    background: -webkit-linear-gradient(#f6f6f6, #ececec)
    background-image: -moz-linear-gradient(top, #f6f6f6, #ececec)
    background-image: -moz-gradient(top, #f6f6f6, #ececec)

</style>
   