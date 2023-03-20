<template #start>
  <div class="flex justify-content-start">
    <Menubar :model="items" class="flex-grow-1 mt-2" />
    <div class="mt-4 ml-2">
      <i
        v-badge.success="2"
        class="pi pi-bell p-overlay-badge"
        style="font-size: 2rem"
      />
    </div>
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
        {
          label: "About",
          icon: "pi pi-info-circle",
          to: "/about",
        },
        {
          label: "Contact",
          icon: "pi pi-envelope",
          to: "/contact",
        },
        {
          label: "Exit",
          icon: "pi pi-sign-out",
          to: "/exit",
        },
      ],
    };
  },
};
</script>
