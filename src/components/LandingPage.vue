<template>
  <welcome />
  <v-row text-start justify="center">
    <v-btn href="/list" color="primary" size="large">
      Check Out My Garage!
    </v-btn>
  </v-row>
  <v-container>
    <v-row>
      <v-col>
        <carousel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Welcome from "./Welcome.vue";
import Carousel from "./Carousel.vue";

export default {
  components: {
    Welcome,
    Carousel,
  },
};
</script>
