<template>
 <div class="title_wrong_letter">Неверные буквы:</div>
 <div class="wrapper_wrong_letters">
    <div class="wrong_letters" v-for="(letter, index) in wrongLetters" :key="letter">
        {{ index === wrongLetters.length - 1 ? letter : `${letter},` + '&nbsp;' }}
    </div>
 </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore();

const wrongLetters = computed(() => { 
    return store.getters.getLetterArray.filter((x: string) => !store.getters.getWord.includes(x))
    // return store.getters.getWrongLetters.filter((item: string, index: number) => {
    //     const double = store.getters.getWrongLetters.indexOf(item) === index
    //     console.log(double)
    //     return double
    // });
})
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.title_wrong_letter
    font-size: 20px
.wrapper_wrong_letters
    display: flex
.wrong_letters
    font-size: 19px
    letter-spacing: 2px
</style>
