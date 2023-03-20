<template>
  <div>
    <h2>My List</h2>
    <ul>
      <li v-for="movie in myList" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myList: [],
    };
  },
};
</script>
