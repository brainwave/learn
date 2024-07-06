<script lang="ts" setup>
import {notes} from "@/const/notes";
import Note from "@/components/notes/Note.vue";
</script>

<template>
  <div class="notesDisplay">
    <Note v-for="note in notes" :key="note.id" :noteEntry="note">
    </Note>
  </div>
</template>

<style scoped>
.notesDisplay {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
