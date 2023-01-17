<template>
  <v-app>
    <navbar />
    <v-main>
      <hero />
      <list-view />
    </v-main>
    <nav-footer />
  </v-app>
</template>

<script setup>
import navbar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";
import ListView from "./components/ListView.vue";
import hero from "./components/Hero.vue";
</script>
