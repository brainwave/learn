<template>
  <v-app>
    <AppBar/>
    <v-main>
      <v-container class="margin-initial">
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

import AppBar from "@/components/header/AppBar.vue";
import {RouterView} from "vue-router";
</script>

<style scoped>
.margin-initial {
  margin: initial;
}
</style>
