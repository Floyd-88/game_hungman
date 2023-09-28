<template>
   <svg height="250" width="200" class="figure-container">
    <!-- Rod -->
    <line x1="60" y1="20" x2="140" y2="20" />
    <line x1="140" y1="20" x2="140" y2="50" />
    <line x1="60" y1="20" x2="60" y2="230" />
    <line x1="20" y1="230" x2="100" y2="230" />

    <!-- Head -->
    <circle v-show="figura[0]"  cx="140" cy="70" r="20" />
    <!-- Body -->
    <line v-show="figura[1]" x1="140" y1="90" x2="140" y2="150" />
    <!-- Arms -->
    <line v-show="figura[2]" x1="140" y1="120" x2="120" y2="100" />
    <line v-show="figura[3]" x1="140" y1="120" x2="160" y2="100" />
    <!-- Legs -->
    <line v-show="figura[4]" x1="140" y1="150" x2="120" y2="180" />
    <line v-show="figura[5]" x1="140" y1="150" x2="160" y2="180" />
  </svg>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore();

const figura = computed(() => store.getters.getWrongLetters)

</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.figure-container 
  fill: transparent
  stroke: #3a3a3a
  stroke-width: 4px
  stroke-linecap: round

</style>
