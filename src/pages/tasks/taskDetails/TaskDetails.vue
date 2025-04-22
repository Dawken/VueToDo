<script setup lang="ts">
import { ref } from "vue";
import { initialTasks } from "../../../features/Tasks/initialTasks";
import { useRoute } from "vue-router";
import TaskDetails from "../../../features/Tasks/TaskDetails/TaskDetails.vue";
import { v4 } from "uuid";

const route = useRoute();
const taskId = route.params.id;

const task = ref(initialTasks.find((task) => task.id === taskId));

const addSubtask = (name: string) => {
  if (task.value) {
    task.value.subtasks.push({
      name,
      completed: false,
      id: v4(),
    });
  }
};

const handleToggleSubtask = (subtaskId: string) => {
  if (task.value) {
    const subtask = task.value.subtasks.find(
      (subtask) => subtask.id === subtaskId
    );
    if (subtask) {
      subtask.completed = !subtask.completed;
    }
  }
};
</script>

<template>
  <TaskDetails
    v-if="task"
    :task="task"
    @add-subtask="addSubtask"
    @toggle-subtask="handleToggleSubtask"
  />

  <div v-else>
    <p>Task not found</p>
    <RouterLink to="/tasks">Go back to tasks</RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
