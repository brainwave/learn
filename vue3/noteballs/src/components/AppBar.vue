<script setup lang="ts">

import {ref, watch} from "vue";
import NavBar from "@/components/NavBar.vue";

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const navItems = ['Notes','Stats']

</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent :elevation="2">
        <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer" class="nav-drawer"
                            v-if="$vuetify.display.mdAndDown"></v-app-bar-nav-icon>
        <v-toolbar-title class="title">Noteballs App</v-toolbar-title>
        <v-navigation-drawer v-if="drawer" :location="$vuetify.display.mobile ? 'bottom' : 'undefined'"
                             temporary>
          <v-list :items="navItems"></v-list>
        </v-navigation-drawer>
        <v-spacer></v-spacer>
        <NavBar v-if="$vuetify.display.lgAndUp" :navItems="navItems"  available-width=""/>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<style scoped>
.title {
  display: flex;
  width: fit-content;
}
</style>
