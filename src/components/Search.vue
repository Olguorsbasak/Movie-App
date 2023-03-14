<template>
  <div class="flex justify-content-center mb-4">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText
        icon="pi pi-search "
        v-model="searchTerm"
        placeholder="Search "
      />
    </span>
    <Button
      @click="searchMovies"
      severity="secondary"
      label="Search"
      class="ml-2"
    ></Button>
  </div>
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
