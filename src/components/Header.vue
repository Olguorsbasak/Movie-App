<template>
  <h1 class="header-left" style="text-align: left">{{ label }}</h1>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
