<template>
  <div class="settings">
    <h1>Settings</h1>

    <v-card>
      <v-card-title> Delete App Data </v-card-title>

      <v-card-text>
        Permanently delete all application data. This cannot be undone.
      </v-card-text>

      <v-card-actions>
        <v-btn color="error" @click="deleteDataConfirmation = true"
          >Delete Data</v-btn
        >
      </v-card-actions>
    </v-card>

    <ConfirmationDialog
      v-model="deleteDataConfirmation"
      confirmText="Delete Data"
      denyText="Cancel"
      title="Permanently delete app data?"
      @confirm="deleteData"
    />
  </div>
</template>

<script>
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import { deleteAllData } from "@/scripts/localStorage";

export default {
  name: "SettingsView",
  components: { ConfirmationDialog },
  data: () => ({
    deleteDataConfirmation: false,
  }),
  methods: {
    deleteData() {
      deleteAllData();
      location.reload();
    },
  },
};
</script>

<style scoped>
.settings {
  margin: 2rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
