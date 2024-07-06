<script setup lang="ts">
defineProps<{
  navItem: string
}>()
</script>

<template>
  <v-btn>
    {{navItem}}
  </v-btn>
</template>

<style scoped>

</style>
