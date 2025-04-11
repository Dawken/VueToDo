<script setup lang="ts">
import { ref } from "vue";
import { initialTasks } from "../../features/tasks/initialTasks";
import Calendar from "../../features/tasks/Calendar/Calendar.vue";

const tasks = ref(initialTasks);
</script>

<template>
  <Calendar />
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
