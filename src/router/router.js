import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import MyList from "../views/MyList.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Detail
  },
  {
    path: '/mylist',
    name: 'mylist',
    component: MyList,
  },
  {
    path:"/about",
    name: "about",
    component: About,
  },
  {
    path:"/contact",
    name: "contact",
    component: Contact,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;