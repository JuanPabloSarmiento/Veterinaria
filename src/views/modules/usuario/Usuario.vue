<template>
<Nav @salir="cerrarSesion"></Nav>
<RouterView />
<FotterV></FotterV>
</template>
<script setup>
import { RouterView } from 'vue-router';
import ButtonV from '@/components/ButtonV.vue';
import { onMounted, reactive,ref } from 'vue';
import { sesion } from '@/stores/funcLogin';
import { useRoute, useRouter } from 'vue-router';
import FotterV from '@/components/FotterV.vue';
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
    const confirmar = confirm('¿Esta seguro de salir?');
    if (confirmar) {
        store.cerrar();
    store.$reset();
    router.push('/');
    }
    
}


</script>