import './assets/styles/main.sass'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
import router from './router'

app.use(store)
app.use(router)
app.mount('#app')
