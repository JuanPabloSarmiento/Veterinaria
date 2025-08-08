<template>
  <main class="p-6 w-screen h-screen" >
    
    <form @submit.prevent action="" class=" bg-stone-700 flex flex-col m-auto w-md gap-4 items-center p-2 rounded-sm">
      <h2 class=" first-letter:text-cyan-600 first-letter:text-4xl text-cyan-50 text-2xl font-bold">Educatdog</h2>
      <h2 class=" text-cyan-50 bg-stone-900 p-2 w-md text-center  text-2xl font-bold">Inicia sesion</h2>
      


      <InputV
      v-model="correo"
        class=" "
        inputLabel="Correo"
        placeholder="Email"
        type="email"
        inputName="Correo Electronico"
      ></InputV>

      <InputV v-model="contrasena" inputLabel="Contraseña" type="password" placeholder="contraseña" inputName="password"></InputV>
      <ButtonV class=" text-cyan-50 font-semibold bg-cyan-700 p-2 rounded-sm pr-4 pl-4 hover:bg-cyan-600 hover:shadow-md hover:shadow-cyan-100  transition-all duration-500 ease-in-out">enviar</ButtonV>
    </form>
  </main>
</template>
<script setup>
import ButtonV from '@/components/ButtonV.vue'
import InputV from '@/components/InputV.vue'
import { getApi } from '@/apis/methods/apifetch';
import {ref,reactive} from 'vue';


const correo = ref('');
const contrasena= ref('');




</script>
<style scoped>
main{
  background-image: url(/public/images/fondo.png);
}
</style>