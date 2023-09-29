<template>
  <div class="new_game">
    <!-- <router-link :to="{ name: 'homeGame'}"> -->
    <p class="nav_item" @click="goHome()">
      Новая игра
    </p>
  <!-- </router-link> -->
  </div>
  <div class="rules_game">
    <p class="nav_item" @click="rulesGamePage()">
      Правила игры
    </p>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import {restartGame} from '../composables/RestartGame'

const router = useRouter()
const route = useRoute()


function goHome() {
  router.push('/')
  restartGame()
}

function rulesGamePage() {
  router.push('/rules')
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.new_game
  height: 50px


</style>
