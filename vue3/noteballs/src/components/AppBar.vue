<script setup lang="ts">

import {ref, watch} from "vue";
import NavBar from "@/components/NavBar.vue";
import NavDrawer from "@/components/NavDrawer.vue";

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const navItems = [
  {
    title: 'Notes',
    path : '/notes'
  },
  {
    title: 'Stats',
    path : '/stats'
  }
]

</script>

<template>

      <v-app-bar color="primary" prominent :elevation="2">
        <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer" class="nav-drawer"
                            v-if="$vuetify.display.mdAndDown"></v-app-bar-nav-icon>
        <v-toolbar-title class="title">Noteballs</v-toolbar-title>
        <NavDrawer v-if="drawer" :navItems="navItems"/>
        <v-spacer></v-spacer>
        <NavBar v-if="$vuetify.display.lgAndUp" :navItems="navItems"/>
      </v-app-bar>

</template>

<style scoped>
.title {
  display: flex;
  width: fit-content;
}
</style>
