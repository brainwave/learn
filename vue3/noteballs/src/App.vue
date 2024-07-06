<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import AppBar from "@/components/AppBar.vue";
import { RouterView } from "vue-router";
</script>
