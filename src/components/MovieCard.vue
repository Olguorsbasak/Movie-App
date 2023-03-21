<template>
  <div class="flex flex-column align-items-center">
    <Image
      :src="moviePath"
      alt="Movie Poster"
      class="flex flex-column align-items-center w-12 h-auto mb-2 mt-6"
      @click="navigateToDetail"
    />

    <h3
      class="movie-title text-base font-bold m-0 text-center text-teal-900 font-semibold"
    >
      {{ movie.title }}
    </h3>
    <p
      class="movie-rating m-0 text-base text-center font-semibold text-red-500"
    >
      <i class="pi pi-star-fill text-red-500"></i>
      {{ movie.vote_average }}
    </p>
    <Button
      v-if="!addedToMyList"
      label="Add Bookmark"
      icon="pi pi-heart"
      severity="success"
      class="align-content-end"
      rounded
      @click="onAddToMyList"
    />
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useMovieStore } from "/src/store/MovieStore.js";

export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
    addedToMyList: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["addToMyList"]),
    navigateToDetail() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
    onAddToMyList() {
      this.addToMyList(this.movie);
    },
  },
  computed: {
    moviePath() {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/w300${this.movie.poster_path}`;
      }

      return "src/assets/images/movie-empty.jpeg";
    },
  },
};
</script>

<style scoped></style>
