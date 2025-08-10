import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/modules/login/Login.vue'
import Register from '@/views/modules/registro/Register.vue' ;
import Usuario from '@/views/modules/usuario/Usuario.vue';
import RegistroAnimal from '@/views/modules/animales/RegistroAnimal.vue';
import MisAnimales from '@/views/modules/animales/MisAnimales.vue';
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
      children: [
        {
          path: '/usuario/registrar-animal',
          name: 'registroA',
          component: RegistroAnimal,
        },
        {
          path: '/usuario/mis-animales',
          name: 'vistaA',
          component: MisAnimales,
        }
        
      ],
    },
    
  ],
})

export default router
