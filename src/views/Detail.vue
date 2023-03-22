<template>
  <div class="flex flex-column align-items-center">
    <div
      v-if="movie.poster_path"
      class="flex flex-column align-items-center mb-2 mt-6"
    >
      <img
        :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
        alt="Movie Poster"
        class="w-12 h-auto"
      />
      <h3
        class="movie-title text-base font-bold m-0 text-center text-teal-900 font-semibold"
      >
        Movie Name: <br />
        {{ movie.title }}
      </h3>
    </div>
    <div v-else>
      <h3
        class="movie-title text-base font-bold m-0 text-center text-teal-900 font-semibold"
      >
        {{ movie.title }}
      </h3>
    </div>
    <p
      class="movie-rating m-0 text-base text-center font-semibold text-red-500"
    >
      <i class="pi pi-star-fill text-red-500"></i>
      Rating: {{ movie.vote_average }}
    </p>
    <p class="movie-overview text-center font-semibold text-800 text-lg">
      Overview: <br />
      {{ movie.overview }}
    </p>
    <div v-if="movie.cast && movie.cast.length" class="cast-container">
      <h4 class="text-center font-bold text-lg mt-4 text-red-500">Cast:</h4>
      <ul class="cast-list flex flex-wrap justify-center">
        <li
          v-for="(cast, index) in movie.cast.slice(0, 8)"
          :key="index"
          class="cast-item flex flex-column items-center m-2"
        >
          <img
            v-if="cast.profile_path"
            :src="'https://image.tmdb.org/t/p/w185' + cast.profile_path"
            alt="Cast Member"
            class="w-12 h-auto rounded-full"
          />
          <p v-if="cast.name" class="cast-name text-center font-semibold">
            {{ cast.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      movie: {},
      cast: {},
    };
  },

  async created() {
    const id = this.$route.params.id;
    const apiKey = import.meta.env.VITE_API_KEY;
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;

    const movieData = await this.fetchMovieData(movieUrl);
    const castData = await this.fetchCastData(castUrl);

    this.updateMovieData(movieData, castData);
  },

  methods: {
    async fetchMovieData(url) {
      const response = await fetch(url);
      return await response.json();
    },

    async fetchCastData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data.cast;
    },

    updateMovieData(movieData, castData) {
      this.movie = {
        ...movieData,
        cast: castData,
      };
    },
  },
};
</script>
