<script lang="ts" setup>
defineProps<{ expanded: boolean }>()
</script>

<template>
  <v-btn class="noteAction" size="small" @click.stop="$emit('expandButtonClicked')">
    <v-icon icon="mdi-pencil"></v-icon>
  </v-btn>
</template>

<style scoped>
.noteAction {
  padding: 0;
}
</style>
