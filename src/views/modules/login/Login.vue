<template>
  <main>
    <form @submit.prevent action="">
      <InputV inputLabel="Nombre" placeholder="username" inputName="nombre usuario"></InputV>

      <InputV
        inputLabel="Correo"
        placeholder="Email"
        type="email"
        inputName="Correo Electronico"
      ></InputV>

      <InputV inputLabel="Contraseña" placeholder="contraseña" inputName="password"></InputV>
      <ButtonV>enviar</ButtonV>
    </form>
  </main>
</template>
<script setup>
import ButtonV from '@/components/ButtonV.vue'
import InputV from '@/components/InputV.vue'
import {ref,reactive} from 'vue';

const nombre= ref('');
const correo = ref('');
const contraseña= ref('');



</script>
