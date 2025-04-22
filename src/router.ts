import { createRouter, createWebHistory } from "vue-router";
import Tasks from "./pages/Tasks/Tasks.vue";
import TaskDetails from "./pages/Tasks/TaskDetails/TaskDetails.vue";
import Watch from "./pages/Watch/Watch.vue";

const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    name: "TaskDetails",
    component: TaskDetails,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
