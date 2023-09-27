<template>
 <div class="header">
    <HeaderGame/>
 </div>
 <div class="nav">
    <NavigationGame/>
 </div>
 <div class="main">
    <div class="visual_figure">
        <VisualGame/>
    </div>
    <div class="word">
        <WordBlockGame/>
    </div>
    <div class="wrong_letter">
        <WrongLetterBlockGame/>
    </div>
    <div class="double" v-if="false">
        <WarningDouble/>
    </div>
 </div>
 <div v-if="false">
    <EndGameModal/>
 </div>
</template>

<script lang="ts" setup>
import HeaderGame from '../components/HeaderGame.vue'
import NavigationGame from '../components/NavigationGame.vue'
import VisualGame from '../components/VisualGame.vue'
import WordBlockGame from '../components/WordBlockGame.vue'
import WrongLetterBlockGame from '../components/WrongLetterBlockGame.vue'
import WarningDouble from '../components/WarningDouble.vue'
import EndGameModal from '../modals/EndGameModal.vue'


</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.header
    display: flex
    height: 100px
    background: dodgerblue
    justify-content: space-evenly
    align-items: center

.nav
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px 10px
    width: 200px
    background-color: gainsboro
    height: 100%
    position: fixed

.main
    margin-left: 200px
    padding: 20px

.visual_figure
    display: flex
    justify-content: center

.word
    flex-direction: column
    display: flex
    align-items: center
    justify-content: center
    margin-top: 0px
    height: 100px

.double
    display: flex
    justify-content: center
    align-items: center
    width: 200px
    height: 50px
    border: 1px solid
    background-color: aquamarine
    border-radius: 5px
    position: absolute
    bottom: 0
</style>
