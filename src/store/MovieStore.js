import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    myList: []
  }),
  actions: {
    addToMyList(movie) {
      this.myList.push(movie);
    }
  }
});
