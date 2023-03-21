<template #start>
  <div class="flex flex-wrap justify-start items-center">
    <Menubar :model="items" class="flex-grow-1 mt-2">
      <template #item="{ item }">
        <router-link
          :to="item.to"
          class="p-menuitem-link router-link-active router-link-active-exact"
          ><span class="p-menuitem-icon" :class="item.icon"></span
          ><span class="p-menuitem-text">{{ item.label }}</span>
          <Badge
            v-if="hasBadge(item.label)"
            class="ml-2"
            severity="success"
            :value="listCount"
          ></Badge>
        </router-link>
      </template>
    </Menubar>
  </div>
  <h1 class="text-green-900 text-center font-semibold">
    {{ label }}
  </h1>
</template>

<script>
import { mapState } from "pinia";
import { useMovieStore } from "../store/MovieStore";
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
  computed: {
    ...mapState(useMovieStore, ["listCount"]),
  },
  methods: {
    hasBadge(label) {
      return label === "My List" && this.listCount > 0;
    },
  },
};
</script>
