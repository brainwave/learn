<template>
  <NewNote/>
  <v-divider></v-divider>
  <v-container class="noteActions">
    <NewNoteActions/>
  </v-container>
  <v-divider></v-divider>
  <Notes></Notes>
</template>

<script lang="ts" setup>

import NewNote from "@/components/notes/NewNote.vue";
import NewNoteActions from "@/components/notes/NewNoteActions.vue";
import Notes from "@/components/notes/Notes.vue";
</script>

<style scoped>
.noteActions {
  display: flex;
  justify-content: flex-end;
}
</style>

