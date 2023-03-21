<template>
  <div>
    <h2
      class="flex flex-column align-items-center font-semibold text-green-600"
    >
      My List
    </h2>
    <div
      class="movie-row flex justify-content-evenly mb-4"
      v-for="(group, index) in myListRows"
      :key="index"
    >
      <MovieCard
        v-for="(movie, movieIndex) in group"
        :key="movieIndex"
        :movie="movie"
        @add-to-my-list="onAddToMyList"
        :added-to-my-list="true"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import { mapState } from "pinia";
import { useMovieStore } from "../store/MovieStore";
import { mapActions } from "pinia";

export default {
  components: {
    MovieCard,
  },
  computed: {
    ...mapState(useMovieStore, ["myList"]),
    myListRows() {
      const uniqueList = this.myList.filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.id === movie.id)
      );
      const result = [];
      for (let i = 0; i < uniqueList.length; i += 3) {
        result.push(uniqueList.slice(i, i + 3));
      }
      return result;
    },
  },

  methods: {
    ...mapActions(useMovieStore, ["addToMyList"]),
    onAddToMyList(movie) {
      this.addToMyList(movie);
    },
  },
};
</script>

<style scoped></style>
