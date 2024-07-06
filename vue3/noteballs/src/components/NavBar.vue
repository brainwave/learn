<script setup lang="ts">
import NavItem from "@/components/NavItem.vue";

defineProps<{
  navItems: string[],
}>()
</script>

<template>
  <div class="nav-bar">
    <NavItem v-for="item in navItems" :navItem="item.title" :key="item"/>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  gap: 1rem;
}

</style>
