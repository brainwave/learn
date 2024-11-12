<script lang="ts" setup>
defineProps<{
  expanded: boolean,
  beingEdited: boolean,
  expandEnabled: boolean
}>()
</script>

<template>
  <v-btn v-if=expandEnabled class="noteAction" size="small" variant="plain" @click.stop="$emit('expandButtonClicked')">
    <v-icon v-if="!expanded" icon="mdi-arrow-expand"></v-icon>
    <v-icon v-if="expanded" icon="mdi-arrow-collapse"></v-icon>
  </v-btn>
  <v-btn v-if="beingEdited" class="noteAction" size="small" @click.stop="$emit('saveButtonClicked')">
    <v-icon icon="mdi-content-save-outline"></v-icon>
  </v-btn>
  <v-btn v-else class="noteAction" size="small" @click.stop="$emit('editButtonClicked')">
    <v-icon icon="mdi-pencil"></v-icon>
  </v-btn>

  <v-btn class="noteAction" size="small" @click.stop="$emit('deleteButtonClick')">
    <v-icon icon="mdi-trash-can-outline"></v-icon>
  </v-btn>
</template>

<style scoped>
.noteAction {
  padding: 0;
}
</style>
