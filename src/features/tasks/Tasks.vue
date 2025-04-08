<script setup lang="ts">
import { ref } from "vue";
import Task from "./Task/Task.vue";

const tasks = ref([
  {
    id: 1,
    title: "Christmas Shopping",
    timeSlots: {
      startDate: "2025-03-30T14:00:00",
      endDate: "2025-04-05T17:00:00",
    },
    subtasks: [
      {
        name: "Margherita Pizza",
        completed: false,
      },
      {
        name: "Peanut Butter",
        completed: false,
      },
      {
        name: "Burrata",
        completed: false,
      },
      {
        name: "Cinnamon Rolls",
        completed: false,
      },
    ],
  },
]);

const addSubtask = (taskId: number, name: string) => {
  const task = tasks.value.find((task) => task.id === taskId);
  if (task) {
    task.subtasks.push({ name, completed: false });
  }
};
</script>

<template>
  <div class="tasks">
    <div v-for="task in tasks" :key="task.id">
      <Task :task="task" @add-subtask="addSubtask" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: flex;
  gap: 5px;
}
</style>
