<template>
  <div class="movie-list">
    <h1 class="header-left" style="text-align: left;">Movie App</h1>
    <div class="header-right" style="text-align: right;">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText icon="pi pi-search " v-model="searchTerm" placeholder="Search " />
      </span>
      <Button @click="searchMovies" severity="secondary" label="Search" class="ml-2"></button>
    </div>
    <div class="movie-container">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <Image :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="Movie Poster" />
        <h3 class="movie-title">{{ movie.title }}</h3>
        <p class="movie-rating">{{ movie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      searchTerm: "",
      initialMovies: [], // Yeni state değişkeni
    };
  },
  methods: {
    // Search fonksiyonu güncellendi
    searchMovies() {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c71f45a7bd8b00bca54538370203e7d9&query=${this.searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
          this.initialMovies = data.results; // Arama sonucu listesi kaydediliyor
        })
        .catch((error) => console.log(error));
    },
    // Reset fonksiyonu eklendi
    resetMovies() {
      this.movies = this.initialMovies; // Kaydedilen liste geri yükleniyor
      this.searchTerm = ""; // Arama kutusu sıfırlanıyor
    },
    getPopularMovies() {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c71f45a7bd8b00bca54538370203e7d9`)
        .then((response) => response.json())
        .then((data) => {
          this.movies = data.results;
          this.initialMovies = data.results; // Popüler filmler listesi kaydediliyor
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getPopularMovies();
  },
};

</script>

<style>

</style>
