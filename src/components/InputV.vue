<template>
  <div class="flex flex-col">
    <label :for="inputName" class=" p-1 text-[1.3rem] font-extrabold">
    {{ inputLabel }}
    </label>
    <input
      class=" bg-amber-50 p-1.5 rounded-sm lg:w-xs
      outline-transparent outline-offset-8 opacity-60 focus:outline-offset-1 focus:outline-cyan-700
      transition-outline duration-[300ms] ease-out
      "
      required
      @invalid="error"
      @input="valor"
      :name="inputName"
      :type="inputType"
      :id="inputName"
      :placeholder="placeholder"
      :value="modelValue"
  />
  </div>
  
</template>

<script setup>
const promps = defineProps({
  inputLabel: String,
  inputName: String,
  inputType: { type: String, default: 'text' },
  placeholder: String,
  modelValue: [String, Number],
})
 const emit = defineEmits(['update:modelValue'])

 function valor(e) {
    emit('update:modelValue',e.target.value)
 }
</script>
