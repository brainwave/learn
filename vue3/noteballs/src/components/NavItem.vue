<script lang="ts" setup>

export interface NavItemEntry {
  title: string,
  path: string
}

const props = defineProps<NavItemEntry>()

</script>

<template>
  <v-btn @click="$router.push(props.path)">
    {{ props.title }}
  </v-btn>
</template>

<style scoped></style>
