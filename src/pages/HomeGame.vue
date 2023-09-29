<template>

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
    <div>
        <WarningDouble/>
    </div>
 </div>
 <div v-if="store.getters.getLetterArray.length > 0">
    <EndGameModal :isWin="isWin" :isLose="isLose"/>
 </div>
</template>

<script lang="ts" setup>
import VisualGame from '../components/VisualGame.vue'
import WordBlockGame from '../components/WordBlockGame.vue'
import WrongLetterBlockGame from '../components/WrongLetterBlockGame.vue'
import WarningDouble from '../components/WarningDouble.vue'
import EndGameModal from '../modals/EndGameModal.vue'

import { defineProps} from 'vue'
import { useStore } from 'vuex'

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

</style>
