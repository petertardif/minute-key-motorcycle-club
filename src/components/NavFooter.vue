<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="icon of icons"
        :key="icon.name"
        class="mx-8"
        :icon="icon.name"
        variant="plain"
        size="medium"
        :href="icon.href"
      ></v-btn>
      <v-col class="text-center mt-4" cols="12">
        Tardif <v-icon icon="fa-regular fa-copyright" size="small"></v-icon>
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const icons = ref([
      {
        name: "fa-brands fa-linkedin",
        href: "https://www.linkedin.com/in/petertardif",
      },
      {
        name: "fa-brands fa-twitter",
        href: "https://www.twitter.com/petertardif",
      },
      {
        name: "fa-brands fa-github",
        href: "https://www.github.com/petertardif",
      },
    ]);

    return { icons };
  },
};
</script>
