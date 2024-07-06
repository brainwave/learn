<script lang="ts" setup>
import NavItem, {NavItemEntry} from "@/components/NavItem.vue"

defineProps<{
  navItems: NavItemEntry[],
  activeNumber: number
}>()

</script>

<template>
  <div class="nav-bar">
    <NavItem v-for="(item, index) in navItems" :key="item.title"
             :active="index===activeNumber" :navItem="item" :path="item.path" :title="item.title"
             @click="$emit('activeChanged',index)"/>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  gap: 1rem;
}
</style>
