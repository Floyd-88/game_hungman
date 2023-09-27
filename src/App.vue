<template>
<HomeGame/>
</template>

<script lang="ts" setup>
import HomeGame from './pages/HomeGame.vue'
import {onMounted } from 'vue';
import {useStore} from 'vuex'

const store = useStore();

// const letter = computed( {
//   get: () => store.getters.getLetter,
//   set: (value) => store.commit('setLetter', value)  
// })

onMounted(() => {
  store.dispatch('createNewWord')
})

</script>

<style lang="sass" scoped>
@import './assets/styles/main'
</style>
