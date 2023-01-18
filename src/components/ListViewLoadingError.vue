<template>
  <v-row
    v-if="this.$store.state.isLoading && this.$store.state.errorLoadingData"
    ><p>
      Error loading data, please try again later or contact the Minute Key team.
    </p></v-row
  >
</template>
