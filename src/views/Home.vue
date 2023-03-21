<script>
import MovieCard from "../components/MovieCard.vue";
import Search from "../components/Search.vue";
import MyList from "../views/MyList.vue";

export default {
  name: "App",
  components: {
    MovieCard,
    Search,
    MyList,
  },
  data() {
    return {
      movies: [],
      searchTerm: "",
      initialMovies: [],
      myList: [],
    };
  },
  async created() {
    await this.getPopularMovies();
  },
  methods: {
    async search(searchTerm) {
      if (searchTerm === "") {
        this.getPopularMovies();
        return;
      }
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=c71f45a7bd8b00bca54538370203e7d9&query=${searchTerm}`
        );

        const data = await response.json();
        this.movies = data.results;
        this.initialMovies = data.results;
        this.searchTerm = searchTerm;
      } catch (error) {
        console.log(error);
      }
    },
    addToList(movie) {
      this.myList.push(movie);
    },
    /*   resetMovies() {
      this.movies = this.initialMovies;
      this.searchTerm = "";
    }, */
    async getPopularMovies() {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        const data = await response.json();
        this.movies = data.results;
        this.initialMovies = data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="movie-list">
    <Search @search="search" />
    <div class="grid">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="col-12 md:col-6 lg:col-3"
      >
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
