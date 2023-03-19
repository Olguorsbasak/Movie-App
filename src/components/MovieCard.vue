<template>
  <div class="flex flex-column align-items-center">
    <Image
      v-if="movie.poster_path"
      :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
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
      label="Add Bookmark"
      icon="pi pi-heart"
      severity="success"
      class="align-content-end"
      rounded
      @click="addToMyList"
    />
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    navigateToDetail() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
    addToMyList() {
      eventBus.$emit("add-to-my-list", this.movie);
    },
  },
};
</script>

<style scoped></style>
