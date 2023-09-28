
import store from "../store/index"

export function restartGame(): void {
    store.commit("setLetter", "")
    store.commit("setRemoveLetterArray")
    store.commit("setRemoveRightLetters")
    store.dispatch('createNewWord')
}