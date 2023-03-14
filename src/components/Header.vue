<template>
  <h1 class="text-green-900 text-center font-semibold">{{ label }}</h1>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Movie App",
    },
  },
};
</script>
