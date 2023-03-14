<template>
  <div class="flex flex-column align-items-center">
    <Image
      :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
      alt="Movie Poster"
      class="flex flex-column align-items-center w-12 h-auto mb-2"
    />
    <h3
      class="movie-title text-xl font-bold m-0 text-center text-teal-900 font-semibold"
    >
      {{ movie.title }}
    </h3>
    <p
      class="movie-rating m-0 text-base text-center font-semibold text-yellow-500"
    >
      <i class="pi pi-star-fill text-yellow-500"></i>
      {{ movie.vote_average }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  /*   data() {
    return {
      movies: [],
      searchTerm: "",
      initialMovies: [],
    };
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
        .catch((error) => console.log(error));
    },
  },
  async created() {
    await this.getPopularMovies();
  }, */
};
</script>

<style></style>
