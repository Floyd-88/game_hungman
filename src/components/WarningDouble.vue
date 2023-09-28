<template>
    <div class="double" v-show="store.getters.getNotificationDouble">
        <div class="wrapper_text_double" >
            <div class="text_double">Данная буква уже была</div>
        </div>
    </div>
</template>
   
<script lang="ts" setup>
import {useStore} from 'vuex'

const store = useStore();

</script>
   
<style lang="sass" scoped>
@import '../assets/styles/main'
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
.text_double
    font-size: 16px
    font-weight: 100
    font-family: fantasy
    color: brown
</style>
   