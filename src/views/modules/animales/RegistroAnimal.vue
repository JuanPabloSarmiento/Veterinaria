<template>
    <div class="py-6 ">
        <form @submit.prevent="registrar" action="" class="  min-h-min  sm:m-auto 
        bg-[linear-gradient(rgba(120,199,186,0.4)),url('/public/images/animales.png')] bg-center
        justify-center bg-stone-700 box-border  flex flex-col  md:w-md sm:w-sm gap-4 items-center p-9 rounded-2xl">
        <h2 class="font-bold text-2xl text-cyan-900 border-x-2 px-12">Nuevo Animal</h2>
        <InputV v-model="nombre" class="font-bold" inputName="registro" placeholder=""
        inputLabel="Nombre" ></InputV>
        <InputV v-model="especie" class="font-bold" inputName="registro" placeholder="Gato/Perro/etc"
        inputLabel="Especie" ></InputV>
        <InputV v-model="finca" class="font-bold" inputName="registro" placeholder="Finca o Dueño"
        inputLabel="Finca" ></InputV>
        <ButtonV class="p-3 bg-cyan-300 hover:bg-cyan-400 hover:text-cyan-50 rounded-2xl">Enviar</ButtonV>
        <transition  name="fade" mode="out-in">
        <div v-if="exito" class="p-3  bg-cyan-50 border-4 border-cyan-600 text-center text-cyan-700 font-extrabold">
            ¡Mascota registrada exito!
        </div>
        </transition>
    </form>
</div>
</template>
<script setup>
import InputV from '@/components/InputV.vue';
import ButtonV from '@/components/ButtonV.vue';
import { api } from '@/apis/backVeterinaria';
import { ref } from 'vue';
const nombre = ref('');
const especie = ref('');
const finca = ref('');
let exito = ref(false);
const usuario = localStorage.getItem('usuario');
const id = JSON.parse(usuario).id_usuario
console.log(id)
async function registrar() {
    nombre.value.toLowerCase();
    especie.value.toLowerCase();
    finca.value.toLowerCase();
    try {
        const registro = await fetch(`${api}/animales`,
            {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    "nombre": nombre.value,
                    "especie": especie.value,
                    "finca": finca.value,
                    "usuario": {
                    "id_usuario": id
                    }
                })

            }
        )
        if(!registro.ok) throw new Error('no se ha podido realizar la solicitud');
        nombre.value ='';
        especie.value='';
        finca.value='';
        exito.value =true;
        setTimeout(() => {
            exito.value = false
        }, 3000);

    } catch (error) {
        alert(error)
    }
}




</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotate(3deg) translateY(10px);
}
</style>