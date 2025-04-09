import { createRouter, createWebHistory } from "vue-router";
import Tasks from "./pages/tasks/Tasks.vue";

const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
