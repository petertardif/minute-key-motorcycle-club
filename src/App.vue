<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <nav-footer />
  </v-app>
</template>

<script setup>
import Navbar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";
</script>

<style>
body {
  font-family: "Merriweather";
}
</style>
