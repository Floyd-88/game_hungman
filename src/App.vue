<template>
   <div class="header">
    <HeaderGame/>
 </div>
 <div class="nav">
    <NavigationGame/>
 </div>
 <RouterView :isWin="isWin" :isLose="isLose"/>
  <!-- <HomeGame /> -->
</template>

<script lang="ts" setup>
import HeaderGame from './components/HeaderGame.vue'
import NavigationGame from './components/NavigationGame.vue'
import { RouterView } from 'vue-router'
// import HomeGame from './pages/HomeGame.vue'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

onMounted(() => {
  store.dispatch('createNewWord')
})

window.addEventListener('keydown', ({ key }) => {
  if (isLose.value || isWin.value) {
    return
  }

  if (/[а-яА-ЯёЁ]/.test(key)) {
    store.commit('setLetter', key)

    if (store.getters.getLetterArray.includes(key)) {
      store.commit('setNotificationDouble', true)
      setTimeout(() => store.commit('setNotificationDouble', false), 2000)
      return
    }
    store.commit('setLetterArray', key)   
    store.commit('setRightLetters', key)
  }
})

const isLose = computed(() => store.getters.getWrongLetters.length === 6)
const isWin = computed(() => [...store.getters.getWord].every((x) => store.getters.getRightLetters.includes(x)))

</script>

<style lang="sass" scoped>
@import './assets/styles/main'
</style>
