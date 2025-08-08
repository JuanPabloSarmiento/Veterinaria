<template>
<Nav></Nav>
<ButtonV @click="cerrarSesion">ahoraaa</ButtonV>
</template>
<script setup>
import ButtonV from '@/components/ButtonV.vue';
import { onMounted, reactive,ref } from 'vue';
import { sesion } from '@/stores/funcLogin';
import { useRoute, useRouter } from 'vue-router';
import Nav from '@/components/usuarios/Nav.vue'
const store = sesion();
const router = useRouter()
onMounted(() => {
    store.cargar();
    if (store.elemento.length < 1) {
        router.push('/login')
    }
})
function cerrarSesion() {
    store.cerrar()
    store.$reset();
    router.push('/')
}


</script>