import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: () => ({
    word: "Илья" as string,
    letter: "" as string,
    letterArray: ['a', 'v', 'b'] as Array<string>
}),

  getters: {
    getWord: (state): string => state.word,
    getLetter: (state): string => state.letter,
    getLetterArray: (state): Array<string> => state.letterArray
  },

  mutations: {
    setLetter(state, value: string): void {
      state.letter = value
    },

    setLetterArray(state, latter: string): void {
      state.letterArray.push(latter)
    }
  },

  actions: {
    async createNewWord() {
      try {
        const {data} = await axios.get<{ FirstName: string }>("https://api.randomdatatools.ru/?count=1&params=FirstName")
        console.log(data.FirstName);
      } catch (error) {
        console.error(error);
      }
    }

  },

  modules: {
  }
})
