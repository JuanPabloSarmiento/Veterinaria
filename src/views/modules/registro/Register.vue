<template>
  <main class="flex p-6 w-screen  bg-fixed box-border">
    
    <!-- Formulario de registro -->
   <form @submit.prevent="validacion" action="" class=" bg-stone-700 box-border  flex flex-col m-auto md:w-md lg:w-lg sm:w-sm gap-4 items-center p-2 rounded-sm">
      <h2 class=" first-letter:text-cyan-600 first-letter:text-4xl text-cyan-50 text-2xl font-bold">Educatdog</h2>
      <h2 class=" text-cyan-50 bg-stone-900 p-2 sm:w-sm md:w-md lg:w-lg  text-center  text-2xl font-bold">Registrate</h2>

      <!-- Inputs del formulario -->
      <InputV 
        v-model="nombre" 
        inputLabel="Nombre" 
        placeholder="username" 
        inputName="nombre usuario" 
      />
      
      <InputV 
        v-model="telefono" 
        inputType="number" 
        inputLabel="Telefono" 
        placeholder="Telefono" 
        inputName="tel" 
      />
      
      <InputV
        v-model="correo"
        class=""
        inputLabel="Correo"
        placeholder="Email"
        inputType="email"
        inputName="Correo Electronico"
      />
      
      <InputV 
        v-model="contrasena" 
        inputLabel="Contraseña" 
        placeholder="contraseña"
        inputType="password"
        inputName="password"
      />

      <!-- Botón de envío -->
      <ButtonV class="text-cyan-50 font-semibold bg-cyan-700 p-2 rounded-sm pr-4 pl-4 hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500 ease-in-out">
        enviar
      </ButtonV>
    </form>
  </main>
</template>

<script setup>
// Componentes importados
import ButtonV from '@/components/ButtonV.vue'
import InputV from '@/components/InputV.vue'
import { sesion } from '@/stores/funcLogin'
// Composición de Vue
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Ruta base del API
import { api } from '@/apis/backVeterinaria'

// Variables reactivas para los campos del formulario
const nombre = ref('');
const telefono = ref('');
const correo = ref('');
const contrasena = ref('');
const store = sesion();
const router = useRouter();
onMounted(() => {
  store.cargar();
  if (store.elemento.length > 0) {
    router.push('/usuario')
  }
})

// Función de validación y envío de datos
async function validacion() {
  let exito = false

  // Validación simple de campos
  if (
    nombre.value.trim() !== '' &&
    telefono.value.length > 6 &&
    contrasena.value.length > 6
  ) {
    try {
      // Envío de datos al backend
      const res = await fetch(`${api}/usuarios/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre.value,
          telefono: Number(telefono.value),
          correo: correo.value,
          contrasena: contrasena.value,
        }),
      })

      // Validar respuesta del servidor
      if (!res.ok) throw new Error('error al procesar datos')

      // Limpiar los campos si todo sale bien
      nombre.value = ''
      telefono.value = ''
      correo.value = ''
      contrasena.value = ''

      exito = true
      console.log('se han enviado correctamente')
      return exito

    } catch (error) {
      console.error('error en la validacion' + error)
      return exito
    }

  } else {
    console.error('error de diligenciamiento')
  }
}
</script>

<style scoped>

</style>
