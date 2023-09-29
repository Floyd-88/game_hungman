import { createRouter, createWebHistory } from "vue-router";
import HomeGame from '../pages/HomeGame.vue'
import RulesGamePage from '../pages/RulesGamePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'homeGame',
            component: HomeGame
        },
        {
            path: '/rules',
            name: 'rulesGamePage',
            component: RulesGamePage
        },

    ]
})

export default router