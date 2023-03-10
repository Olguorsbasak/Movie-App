
  
    <template >
      <div class="icon">
        <img src="src/assets/images/icon/icon-1.svg" alt="Movie DB logo" class="logo" />
      </div>
    </template>
    
  



<script>
export default {
  name: "Movie",
  props: {
    title: {
      type: String,
      default: "Find Your Movie",
    },
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>

<style scoped>
.logo {
  width: 200px;
  height: 50px;
  position: absolute;
  top: 0%;
  left: 5%;
}
</style>
