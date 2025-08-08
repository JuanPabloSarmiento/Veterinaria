import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/modules/login/Login.vue'
import Register from '@/views/modules/registro/Register.vue' ;
import Usuario from '@/views/modules/usuario/Usuario.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
      ],
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario,
      // children: [
      //   {
      //     path: '/registrar-animal',
      //     name: 'login',
      //     component: Login,
      //   },
      //   {
      //     path: '/ver-animal',
      //     name: 'register',
      //     component: Register,
      //   },
      // ],
    },
    
  ],
})

export default router
