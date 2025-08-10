<template>
   <nav class="flex t-0 bg-cyan-700  font-bold text-2xl ">
    <ul class="flex gap-7   p-5  justify-center items-center">
    

    <li class="padre group relative ">
      <h2 class="text-cyan-950 group-hover:text-cyan-50 cursor-pointer">Animales</h2>
      <ul class=" animate-pulse [animation-duration:0.5s] 
      [animation-iteration-count:1]
      absolute bg-cyan-50 p-3 rounded-sm hidden group-hover:block  ">
         <li class="p-2 w-max transition all duration-300 ease-in-out
 hover:bg-cyan-700 hover:text-cyan-50 rounded-sm transi"><router-link to="/usuario/registrar-animal" >Nuevo Animal</router-link></li>

         <li class="p-2 w-max transition all duration-300 ease-in-out rounded-sm 
 hover:bg-cyan-700 hover:text-cyan-50 transi"><router-link to="mis-animales">Mis Animales</router-link></li>
      </ul>
   </li>



    <li class="padre group relative ">
      <h2 class="text-cyan-950 group-hover:text-cyan-50  cursor-pointer">Citas</h2>
      <ul class=" animate-pulse [animation-duration:0.5s] 
      [animation-iteration-count:1] absolute bg-cyan-50 p-3 rounded-sm hidden group-hover:block  ">
         <li class="p-2 w-max transition all duration-300 ease-in-out rounded-sm 
 hover:bg-cyan-700 hover:text-cyan-50 transi"><router-link to="/agendar" >Nueva Cita</router-link></li>

         <li class="p-2 w-max transition all duration-300 ease-in-out rounded-sm 
 hover:bg-cyan-700 hover:text-cyan-50 transi"><router-link to="mis-animales">Mis Citas</router-link></li>
      </ul>
   </li>
    
   <li class="padre group"><h2 class="text-cyan-950 group-hover:text-cyan-50  cursor-pointer"><router-link to="/veterinarios">Veterinarios</router-link></h2></li>

   <li @click="emit('salir')" class="padre group"><h2 class="text-cyan-950 group-hover:text-cyan-50  cursor-pointer">Salir</h2></li>

   <li class=" w-1/8 sm:w-1/10 md:w-1/15 lg:w-1/20 xl:w-1/25   "><img class="rounded-3xl" src="/public/icono.png" alt=""></li>

   </ul></nav>




</template>
<script setup> 


const emit = defineEmits(['salir'])


   
   



</script>