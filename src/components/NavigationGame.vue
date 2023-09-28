<template>
  <div class="new_game">
    <p class="nav_item" @click="restartGame()">
      Новая игра
    </p>
  </div>
  <div class="rules_game">
    <p class="nav_item">
      Правила игры
    </p>
    </div>
</template>

<script lang="ts" setup>
import {restartGame} from '../composables/RestartGame'

</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.new_game
  height: 50px


</style>
