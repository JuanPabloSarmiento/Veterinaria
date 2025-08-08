<template>
  <button @click="opacity" type="submit" class=" p-b-9 m-3 pointer-none:">
    <slot />
  </button>
</template>
<script setup>
function opacity(e) {
   e.target.style.opacity = '0.3'
   setTimeout(() => {
    e.target.style.opacity = '1'
   }, 200);
}
</script>
