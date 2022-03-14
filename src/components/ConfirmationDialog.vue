<template>
  <v-dialog
    :value="value"
    @input="(val) => $emit('input', val)"
    max-width="400"
  >
    <v-card>
      <v-card-title>{{ title }}</v-card-title>

      <v-card-actions>
        <v-btn color="primary" @click="deny">{{ denyText }}</v-btn>
        <v-btn color="error" @click="confirm">{{ confirmText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmationDialog",
  props: {
    value: Boolean,
    title: String,
    denyText: String,
    confirmText: String,
  },
  methods: {
    confirm() {
      this.$emit("input", false);
      this.$emit("confirm");
    },
    deny() {
      this.$emit("input", false);
      this.$emit("denny");
    },
  },
};
</script>

<style scoped>
</style>