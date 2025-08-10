<template>
  <main class=" flex flex-wrap justify-center align-middle p-5   bg-fixed box-border " >
    
    <form @submit.prevent="mostrarUsuarios" action="" class=" h-9/12 min-h-min  sm:m-auto justify-center bg-stone-700 box-border  flex flex-col  md:w-md sm:w-sm gap-4 items-center p-2 rounded-sm">
      <h2 class=" first-letter:text-cyan-600 first-letter:text-4xl text-cyan-50 text-2xl font-bold">Educatdog</h2>
      <h2 class=" text-cyan-50 bg-stone-900 p-2 sm:w-sm md:w-md  text-center  text-2xl font-bold">Inicia sesion</h2>
      


      <InputV
      v-model="correo"
        class=" "
        inputLabel="Correo"
        placeholder="Email"
        type="email"
        inputName="Correo Electronico"
      ></InputV>

      <InputV v-model="contrasena" inputLabel="Contraseña" inputType="password" placeholder="contraseña" inputName="password"></InputV>
      <ButtonV class=" text-cyan-50 font-semibold bg-cyan-700 p-2 rounded-sm pr-4 pl-4 hover:bg-cyan-600 hover:shadow-md hover:shadow-cyan-100  transition-all duration-500 ease-in-out">enviar</ButtonV>
    </form>

   

  </main>
 
</template>
<script setup>
import ButtonV from '@/components/ButtonV.vue'
import InputV from '@/components/InputV.vue'
import { getApi } from '@/apis/methods/apifetch';
import { sesion } from '@/stores/funcLogin'
import { useRouter } from 'vue-router';
import {ref,reactive,onMounted} from 'vue';

const store = sesion();
const router = useRouter();
onMounted(() => {
  store.cargar();
  if (store.elemento.length > 0) {
    router.push('/usuario')
  }
})


const correo = ref('');
const contrasena= ref('');
async function mostrarUsuarios() {
  const lista = await getApi('usuarios')
  const user = lista.find(element => 
    (element.nombre && element.correo == correo.value && element.contrasena == contrasena.value)
  );
  if (user) {
    store.iniciar({nombre:user.nombre,correo:correo.value,contrasena:contrasena.value})

    router.push('/usuario')
  }
}

</script>
<style scoped>
</style>