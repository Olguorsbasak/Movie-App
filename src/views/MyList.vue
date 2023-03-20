<template>
  <div>
    <h2
      class="flex flex-column align-items-center font-semibold text-green-600"
    >
      My List
    </h2>
    <ul class="flex flex-wrap justify-center">
      <li v-for="movie in myList" :key="movie.id" class="m-4 text-center">
        <h3
          class="text-lg font-bold m-0 text-center text-teal-900 font-semibold"
        >
          Movie Title: {{ movie.title }}
        </h3>
        <img
          :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
          alt="Movie Poster"
          class="mx-auto d-block mb-2 mt-6"
          style="max-width: 100%"
        />
        <p
          class="movie-rating m-0 text-base text-center font-semibold text-red-500"
        >
          Rating: <i class="pi pi-star-fill text-red-500"></i>
          {{ movie.vote_average }}
        </p>
        <p class="text-center font-semibold text-800">
          Movie Overview: {{ movie.overview }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
li {
  flex-basis: calc(33.33% - 2rem);
}
</style>

<script>
import { mapState } from "pinia";
import { useMovieStore } from "../store/MovieStore";
export default {
  computed: {
    ...mapState(useMovieStore, ["myList"]),
  },
};
</script>
