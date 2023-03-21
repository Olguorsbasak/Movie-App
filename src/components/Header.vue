<template #start>
  <div class="flex flex-wrap justify-start items-center">
    <Menubar :model="items" class="flex-grow-1 mt-2">
      <template #end>
        <i
          v-badge.success="2"
          class="pi pi-bell p-overlay-badge mt-2"
          style="font-size: 2rem"
        />
      </template>
    </Menubar>
  </div>
  <h1 class="text-green-900 text-center font-semibold">{{ label }}</h1>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Find Your Movie",
    },
  },

  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          to: "/",
        },
        {
          label: "My List",
          icon: "pi pi-ticket",
          to: "/mylist",
        },
      ],
    };
  },
};
</script>
