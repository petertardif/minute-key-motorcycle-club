<template>
  <v-card class="py-6 mx-3 my-6 elevation-8">
    <v-img
      :src="src"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px"
      cover
    >
      <v-card-title class="text-white" v-text="manufacturer"></v-card-title>
    </v-img>

    <v-card-text>
      <h6>
        <strong>{{ model }}</strong>
      </h6>
      <div v-if="detailsAreVisible">
        <div><strong>Year</strong>: {{ year }}</div>
        <div><strong>Color</strong>: {{ color }}</div>
        <div><strong>Displacement</strong>: {{ displacement }}</div>
        <div><strong>Power</strong>: {{ power }}</div>
        <div>{{ description }}</div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="secondary" @click="toggleDetails"> Learn More </v-btn>

      <v-spacer></v-spacer>

      <v-btn size="small" @click="toggleFavorite">
        <v-icon>{{
          isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"
        }}</v-icon>
      </v-btn>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="fa-brands fa-twitter"
        href="https://twitter.com/intent/tweet?url=https://minutekeymotorcycleclub.netlify.app/list&text=Check%20out%20Pete's%20awesome%20bikes&hashtags=HirePeteTardif,MinuteKeysNewDevPeteTardif"
        target="_blank"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    power: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    displacement: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.model);
    },
  },
};
</script>

<style scoped>
h6 {
  font-size: 18px;
}
</style>
