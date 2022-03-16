<template>
  <div class="action-header">
    <div class="text-h5">{{ header }}</div>
    <span class="actions">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ActionHeader",
  props: {
    header: String,
  },
};
</script>

<style scoped>
.action-header {
  margin: 1rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>