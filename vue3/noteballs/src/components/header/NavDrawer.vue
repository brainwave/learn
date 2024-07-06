<script lang="ts" setup>
import type {NavItemEntry} from "@/components/header/NavItem.vue"

defineProps<{
  navItems: NavItemEntry[]
}>()
</script>

<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : 'undefined'" temporary>
    <v-list-item v-for="(item,index) in navItems" :key="item" :title="item.title" :to="item.path" link
                 @click="$emit('activeChanged',index)"></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped></style>
