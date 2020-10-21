import Vue from "vue";
import Router from "vue-router"

import Home from "@/views/Home"
import Kanban from '@/views/kanban/Kanban'

Vue.use(Router)

const routes = [
    {
        name: 'home', //nome da rota
        path: '/',    //rota em si
        component: Home  //componente que irá ser renderizadp
    },

    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    }
]

const router = new Router({routes})

export default router