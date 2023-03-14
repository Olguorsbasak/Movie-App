<script>
import MovieCard from "../components/MovieCard.vue";
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
export default {
  name: "App",
  components: {
    MovieCard,
    Header,
    Search,
  },
  data() {
    return {
      movies: [],
      searchTerm: "",
      initialMovies: [],
    };
  },
  async created() {
    await this.getPopularMovies();
  },
  methods: {
    searchMovies() {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c71f45a7bd8b00bca54538370203e7d9&query=${this.searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
          this.initialMovies = data.results;
        })
        .catch((error) => console.log(error));
    },
    resetMovies() {
      this.movies = this.initialMovies;
      this.searchTerm = "";
    },
    getPopularMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=c71f45a7bd8b00bca54538370203e7d9`
      )
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
          this.initialMovies = data.results;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div class="movie-list">
    <Header />
    <Search />
    <div class="grid">
      <div v-for="movie in movies" :key="movie.id" class="col-4">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
