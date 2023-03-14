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
    async search(searchTerm) {
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
    resetMovies() {
      this.movies = this.initialMovies;
      this.searchTerm = "";
      this.$emit("resetMovies");
    },
    async getPopularMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=c71f45a7bd8b00bca54538370203e7d9`
        );
        const data = await response.json();
        this.movies = data.results;
        this.initialMovies = data.results;
      } catch (error) {
        console.log(error);
      }
    },
    addBookmark() {
      // önce, local storage'ta "bookmarks" adında bir veri saklama alanı kontrol edilir
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

      // daha sonra, mevcut filmin ID'si alınır
      let movieId = this.movie.id;

      // eğer bu film ID'si, bookmark listesinde yoksa, bu filmi bookmark'a ekleriz
      if (!bookmarks.includes(movieId)) {
        bookmarks.push(movieId);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        console.log("Bookmark added!");
      } else {
        console.log("Bookmark already exists!");
      }
    },
  },
};
</script>

<template>
  <div class="movie-list">
    <Header />
    <Search @search="search" />
    <div class="grid">
      <div v-for="movie in movies" :key="movie.id" class="col-4">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
