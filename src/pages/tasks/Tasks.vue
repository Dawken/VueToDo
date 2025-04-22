<script setup lang="ts">
import { ref } from "vue";
import { initialTasks } from "../../features/Tasks/initialTasks";
import Calendar from "../../features/Tasks/Calendar/Calendar.vue";
import type { TaskType } from "../../types/TaskType";

const tasks = ref<TaskType[]>(initialTasks);
</script>

<template>
  <Calendar v-model:tasks="tasks" />
  <div class="tasks"></div>
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
