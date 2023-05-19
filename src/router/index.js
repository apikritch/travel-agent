import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/App/Home.vue";
import Tours from "@/views/App/Tours.vue";
import TourDetails from "@/views/App/TourDetails.vue";
import Contact from "@/views/App/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tours",
    name: "Tours",
    component: Tours,
  },
  {
    path: "/tours/:tourId",
    name: "Tour Detail",
    component: TourDetails,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
