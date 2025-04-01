<script setup lang="ts">
import ArrowRight from "../../icons/arrowRight.vue";
import type { TaskProps } from "../../types/taskType";
import Date from "./date/Date.vue";
import Subtask from "./subtask/Subtask.vue";
import TimeLeft from "./timeLeft/timeLeft.vue";

defineProps<{
  task: TaskProps;
}>();
</script>

<template>
  <div class="task-container">
    <div class="task-info">
      <header class="task-title">{{ task.title }}</header>
      <TimeLeft :end-date="task.timeSlots.endDate" />
    </div>
    <div class="task-dates">
      <Date :date="task.timeSlots.startDate" />
      <ArrowRight />
      <Date :date="task.timeSlots.endDate" />
    </div>
    <div class="line-break" />
    <div class="subtasks">
      <div v-for="subtask in task.subtasks">
        <Subtask :sub-task="subtask" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-container {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .task-info {
    display: flex;
    align-items: center;
    gap: 20px;
    .task-title {
      font-weight: 600;
    }
  }
  .task-dates {
    display: flex;
    gap: 12px;
  }
  .line-break {
    background-color: rgb(216, 216, 216);
    height: 1px;
  }
  .subtasks {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
