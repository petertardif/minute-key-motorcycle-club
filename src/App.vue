<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-row class="text-h2 py-6 my-12" justify="center">
        Welcome to the Minute Key Motorcycle Club!
      </v-row>
      <ContainerGrid />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import ContainerGrid from "./components/ContainerGrid.vue";
</script>
