<template>
  <v-container fluid>
    <spinner />
    <v-row justify="center"><h2 class="heading my-6">Pete's Bikes</h2></v-row>
    <v-row
      v-if="!this.$store.state.isLoading && !this.$store.state.errorLoadingData"
      justify="center"
      dense
    >
      <v-col v-for="bike in bikeData" :key="bike.model" :cols="bike.flex">
        <bike
          :key="bike.model"
          :manufacturer="bike.manufacturer"
          :model="bike.model"
          :power="bike.power"
          :description="bike.description"
          :color="bike.color"
          :displacement="bike.displacement"
          :year="bike.year"
          :src="bike.src"
          :is-favorite="bike.isFavorite"
          @toggle-favorite="toggleFavoriteStatus"
        />
      </v-col>
    </v-row>
    <list-view-loading-error />
  </v-container>
</template>

<script>
import Bike from "./Bike.vue";
import Spinner from "./Spinner.vue";
import ListViewLoadingError from "./ListViewLoadingError.vue";

export default {
  computed: {
    bikeData() {
      return this.$store.getters.getBikesData;
    },
  },
  components: {
    Bike,
    Spinner,
    ListViewLoadingError,
  },
  methods: {
    toggleFavoriteStatus(bikeModel) {
      this.$store.commit("toggleBikeFavoriteStatus", { value: bikeModel });
    },
  },
  mounted() {
    this.$store.dispatch("fetchBikesData");
  },
};
</script>
