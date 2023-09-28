import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: () => ({
    word: [] as Array<string>, //рандомное имя
    letter: "" as string, //введенная буква
    letterArray: [] as Array<string>, //массив введенных букв
    rightLetters: [] as Array<string>, //массив с правильными буквами
    wrongLetters: [] as Array<string>, //массив с неправильными буквами
    notificationDouble: false as boolean //показывать уведомление о повторном символе
}),

  getters: {
    getWord: (state): Array<string> => state.word,
    getLetter: (state): string => state.letter,
    getLetterArray: (state): Array<string> => state.letterArray,
    getRightLetters: (state): Array<string> => state.rightLetters,
    getWrongLetters: (state): Array<string> => state.wrongLetters,
    getNotificationDouble: (state): boolean => state.notificationDouble
  },

  mutations: {
    setWord(state, value): void {
      state.word = value.toLowerCase()
    },

    setLetter(state, value: string): void {
      state.letter = value
    },

    setLetterArray(state, letter: string): void {
      state.letterArray.push(letter)
    },

    setRemoveLetterArray(state): void {
      state.letterArray = []
    },

    setRightLetters(state, letter: string): void {
      if(state.word.includes(letter)) {
        state.rightLetters.push(letter) 
      } else {
        state.wrongLetters.push(letter)
      }
    },

    setRemoveRightLetters(state): void {
        state.rightLetters= []
        state.wrongLetters = []
    },

    setNotificationDouble(state, bool: boolean): void {
      state.notificationDouble = (bool)
    },

  },

  actions: {
    async createNewWord({commit}) {
      try {
        const {data} = await axios.get<{ FirstName: string }>("https://api.randomdatatools.ru/?count=1&params=FirstName")
        console.log(data.FirstName);
        commit('setWord', data.FirstName)
      } catch (error) {
        console.error(error);
      }
    }

  },

  modules: {
  }
})
