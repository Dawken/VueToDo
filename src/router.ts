import { createRouter, createWebHistory } from "vue-router";
import Tasks from "./pages/tasks/Tasks.vue";
import TaskDetails from "./pages/tasks/taskDetails/TaskDetails.vue";

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
