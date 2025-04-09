<script setup lang="ts">
import { ref } from "vue";
import { initialTasks } from "../../features/tasks/initialTasks";
import Task from "../../features/tasks/Task/Task.vue";

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
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @add-subtask="addSubtask"
      @toggle-subtask="handleToggleSubtask"
    />
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-height: 100dvh;
  max-width: 100dvw;
}
</style>
