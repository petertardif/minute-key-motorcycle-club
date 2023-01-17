import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      bikes: null,
      errorLoadingData: false,
      isLoading: false,
    };
  },
  mutations: {
    toggleBikeFavoriteStatus(state, payload) {
      const identifiedBike = state.bikes.find(
        (bike) => bike.model === payload.value
      );
      identifiedBike.isFavorite = !identifiedBike.isFavorite;
    },
    loadBikeData(state, payload) {
      state.bikes = payload;
    },
  },
  actions: {
    // since mutations must be synchronous, use async action that theoritcally could take longer if it were an actual API call
    async fetchBikesData(context) {
      this.state.isLoading = true;
      // simulated fetch call that grabs data from file through dynamic import to return a promise that resolves to an object (https://javascript.info/modules-dynamic-imports)
      await import("../assets/data.js")
        .then((obj) => obj.bikes)
        .then((bikes) => context.commit("loadBikeData", bikes))
        .then(() => (this.state.isLoading = false))
        .catch((err) => (this.state.errorLoadingData = true));
    },
  },
  getters: {
    getBikesData(state) {
      return state.bikes;
    },
  },
});
