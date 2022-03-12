<template>
  <div class="field">
    <label :for="id">{{label}}</label>
    <input :type="type" :id="id" :value="value" @change="$emit('change', $event.target.value)" /> 
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: String,
    value: String,
    id: String,
    label: String,
  },
};
</script>

<style scoped>
  .field {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 20rem;
  }
</style>
