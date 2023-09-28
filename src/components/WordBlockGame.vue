<template>
    <div class="task_text">
        Отгадай имя:
    </div>
    <div class="wrapper_word" 
        >
        <div class="wrapper_letter_is_word" v-for="(letter, index) in store.getters.getWord" :key="index">
            <p class="letter_is_word">{{ store.getters.getRightLetters.includes(letter) ? letter : '' }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
const store = useStore();

</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.task_text
    font-size: 25px
    padding-bottom: 10px
.wrapper_word
    display: flex
.wrapper_letter_is_word
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 35px
    height: 35px
    border-bottom: 2px solid
    margin: 0 5px
.letter_is_word
    font-size: 35px

.border_is_word

</style>
