<template>
  <div class="action-header">
    <h2>{{ header }}</h2>
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
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>