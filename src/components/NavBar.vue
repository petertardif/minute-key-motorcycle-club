<template>
  <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/id/314/1920/1080"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(95,142,228,1), rgba(228,101,95,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-icon icon="fa-solid fa-motorcycle"></v-icon>
    </template>

    <v-app-bar-title>Minute Key Motorcycle Club</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-tooltip text="My Garage">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="px-10"
          icon="fa-solid fa-warehouse"
        ></v-btn>
      </template>
    </v-tooltip>
  </v-app-bar>
</template>
