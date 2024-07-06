<script lang="ts" setup>

import {NoteEntry} from "@/const/notes";
import {computed, ref} from "vue";

const props = defineProps<{
  noteEntry: NoteEntry
}>()

const charLimit = 445;
const isNoteTooBig = computed(() => {
  return props.noteEntry.content.length > charLimit
})

const shortContent = computed(() => {
  return props.noteEntry.content.slice(0, charLimit)
})

const expanded = ref(false)
</script>

<template>
  <v-card hover variant="tonal" @click="expanded=!expanded">
    <v-container fluid>
      <v-row dense>
        <v-card-title class="text-subtitle-2">{{ props.noteEntry.title }}</v-card-title>
        <v-card-text class="noteText">
          {{ isNoteTooBig && !expanded ? shortContent : props.noteEntry.content }}
        </v-card-text>
        <v-card-actions v-if="isNoteTooBig">
          <v-btn class="ms-2" size="small" @click.stop="expanded=!expanded">
            <v-icon v-if="!expanded" icon="mdi-chevron-down"></v-icon>
            <v-icon v-if="expanded" icon="mdi-chevron-up"></v-icon>
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-container>
  </v-card>

  <v-divider></v-divider>

</template>

<style scoped>
.noteText {
  padding: 0;
}

.text-subtitle-2 {
  padding: 0;
}
</style>
