<template>
    <div class="modal_fone">
    <div class="modal_window">
        <div class="wrapper_text_model_window" :class="{'bg_win': true, 'bg_lose': false}">
            <div v-if="true" class="end_text win_text">
                Поздравляем, Вы победили!!!
            </div>
            <div v-else class="end_text not_win_text">
               <p class="loser">Вы прогирали!!!</p> 
               <p class="loser">Загаданное имя - <span>Илья</span></p> 
            </div>
        </div>
    </div>
  </div>
</template>
   
<script lang="ts" setup>

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
    justify-content: center
    align-items: center
    width: 400px
    height: 200px
    background-size: cover

.end_text
    font-size: 26px
    font-family: fantasy
    font-weight: 100

.win_text
    color: dodgerblue

.loser
    margin: 0
    color: darkblue

.bg_win
    background-image: url(http://localhost:8080/img/win.48c6ddf6.jpg)

.bg_lose
    background-image: url(/src/assets/img/loser.jpg)


</style>
   