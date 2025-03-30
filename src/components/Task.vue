<script setup lang="ts">
interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

defineProps<TaskProps>();
</script>

<template>
  <div class="task-container">
    <header class="task-title">{{ task.title }}</header>
  </div>
</template>

<style scoped>
.task-container {
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
}
</style>
