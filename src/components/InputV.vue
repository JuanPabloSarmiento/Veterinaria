<template>
  <label :for="inputName">
    {{ inputLabel }}
    <input
      required
      @invalid="error"
      @input="valor"
      :name="inputName"
      :type="inputType"
      :id="inputName"
      :placeholder="placeholder"
      :value="modelValue"
  /></label>
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
function error(e) {
  e.targer.setCustomValidity('este caompo es obligatorio')
}
function valor(e){
  e.target.setCustomValidity('')
  emit('update:modelValue',e.target.value)
}
</script>
