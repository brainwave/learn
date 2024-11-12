<script lang="ts" setup>

import {NoteEntry} from "@/const/notes";
import {computed, ref} from "vue";
import NoteActions from "@/components/notes/NoteActions.vue";

const props = defineProps<{
  noteEntry: NoteEntry
}>()

const charLimit = 537;
const isNoteTooBig = computed(() => {
  return props.noteEntry.content.length > charLimit
})

const shortContent = computed(() => {
  return props.noteEntry.content.slice(0, charLimit - 7) + "..."
})

const expanded = ref(false)
const beingEdited = ref(false)
const beingDeleted = ref(false)

</script>

<template>
  <v-card :ripple="false" variant="tonal">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card-title class="text-subtitle-2" @click="expanded=!expanded">
            <v-btn class="noteAction" variant="text">
              {{ props.noteEntry.title }}
            </v-btn>
          </v-card-title>
          <v-card-text v-if="!beingEdited" class="noteText">
            {{ isNoteTooBig && !expanded ? shortContent : props.noteEntry.content }}
          </v-card-text>
          <v-textarea v-else :model-value="props.noteEntry.content" :rows="isNoteTooBig ? 10 : 5"
                      class="noteText"
                      clearable counter outlined variant="plain"></v-textarea>
          <v-card-actions class="noteAction">
            <v-spacer></v-spacer>
            <NoteActions :beingEdited="beingEdited" :expandEnabled="isNoteTooBig"
                         :expanded="expanded"
                         @editButtonClicked="beingEdited = true"
                         @expandButtonClicked="expanded=!expanded"
                         @saveButtonClicked="beingEdited = false"/>
            1
          </v-card-actions>
        </v-col>
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

.noteAction {
  padding: 0;
}
</style>
