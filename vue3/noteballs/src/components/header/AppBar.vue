<script lang="ts" setup>

import {ref} from "vue";
import NavBar from "@/components/header/NavBar.vue";
import NavDrawer from "@/components/header/NavDrawer.vue";
import type {NavItemEntry} from "@/components/header/NavItem.vue"

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const navItems: NavItemEntry[] = [
  {
    title: 'Notes',
    path: '/notes'
  },
  {
    title: 'Stats',
    path: '/stats'
  }
]

const activeItemNumber = ref(null)

const onActiveChanged = (index: number) => {
  activeItemNumber.value = index
}

</script>

<template>

  <v-app-bar :elevation="2" color="primary" prominent>
    <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" class="nav-drawer" variant="text"
                        @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="title">Noteballs</v-toolbar-title>
    <NavDrawer v-if="drawer" :navItems="navItems" @activeChanged="onActiveChanged"
               @click="drawer = !drawer"/>
    <v-spacer></v-spacer>
    <NavBar v-if="$vuetify.display.lgAndUp" :activeNumber="activeItemNumber" :navItems="navItems"
            @activeChanged="onActiveChanged"/>
  </v-app-bar>

</template>

<style scoped>
.title {
  display: flex;
  width: fit-content;
}
</style>
