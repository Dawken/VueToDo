<script setup lang="ts">
import { ref } from "vue";
import Task from "./components/Task.vue";

const tasks = ref([
  { id: 1, title: "Kup mleko", completed: false },
  { id: 2, title: "Zrób ćwiczenia", completed: true },
]);
</script>

<template>
  <div class="tasks">
    <div v-for="task in tasks" :key="task.id">
      <Task :task="task" />
    </div>
  </div>
</template>

<style scoped>
.tasks {
  display: flex;
  gap: 5px;
}
</style>
