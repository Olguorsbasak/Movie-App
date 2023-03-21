import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    myList: [],
  }),
  actions: {
    addToMyList(movie) {
      const isValidMovie = !this.myList.some((item) => item.id === movie.id);

      if (isValidMovie) {
        this.myList.push(movie);
      }
    },
  },
});
