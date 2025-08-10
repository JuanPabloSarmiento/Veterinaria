<template>
  
  <nav class=" top-0 w-dvw box-border ">
    <section class=" ">
      <ul class=" flex flex-wrap gap-5 font-semibold  justify-center-safe bg-cyan-600 text-cyan-50 p-2  p-y-3 align-middle  ">
        <li class="p-3 hover:text-cyan-100 " tabindex="1"><router-link to="/login">login</router-link></li>
        <li class="p-3 hover:text-cyan-100  " tabindex="1"><router-link to="/register">Registrate</router-link></li>
        <li class=" w-1/8 sm:w-1/10 md:w-1/15 lg:w-1/20 xl:w-1/25  "><img class="rounded-3xl" src="/public/icono.png" alt=""></li>
      </ul>
    </section>

   
  </nav>
  <main class="box-border ">
      <RouterView />
    </main>
    
 <FotterV class=" "></FotterV>
 
</template>
<script setup>
import FotterV from '@/components/FotterV.vue';
</script>
