<script setup lang="ts">
defineProps<{
  navItems: string[],
}>()
</script>

<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : 'undefined'"
                       temporary>
    <v-list-item link v-for="item in navItems" :key="item" :title="item.title"></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
