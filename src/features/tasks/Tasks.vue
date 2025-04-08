<script setup lang="ts">
import { ref } from "vue";
import Task from "./Task/Task.vue";
import { initialTasks } from "./initialTasks";

const tasks = ref(initialTasks);

const addSubtask = (taskId: number, name: string) => {
  const task = tasks.value.find((task) => task.id === taskId);
  if (task) {
    task.subtasks.push({
      name,
      completed: false,
      id: task.subtasks.length + 1,
    });
  }
};

const handleToggleSubtask = (taskId: number, subtaskId: number) => {
  const task = tasks.value.find((task) => task.id === taskId);
  if (task) {
    const subtask = task.subtasks.find((subtask) => subtask.id === subtaskId);
    if (subtask) {
      subtask.completed = !subtask.completed;
    }
  }
};
</script>

<template>
  <div class="tasks">
    <div v-for="task in tasks" :key="task.id">
      <Task
        :task="task"
        @add-subtask="addSubtask"
        @toggle-subtask="handleToggleSubtask"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: flex;
  gap: 5px;
}
</style>
