<template>
  <v-container fluid>
    <v-progress-circular
      v-if="this.$store.state.isLoading"
      :size="70"
      :width="7"
      color="secondary"
      indeterminate
    ></v-progress-circular>
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
    <v-row
      v-if="this.$store.state.isLoading && this.$store.state.errorLoadingData"
      ><p>
        Error loading data, please try again later or contact the Minute Key
        team.
      </p></v-row
    >
  </v-container>
</template>

<script>
import Bike from "./Bike.vue";

export default {
  computed: {
    bikeData() {
      return this.$store.getters.getBikesData;
    },
  },
  components: {
    Bike,
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
