<script setup lang="ts">
import ArrowRight from "../../../components/icons/arrowRight.vue";
import LineBreak from "../../../components/ui/LineBreak.vue";
import type { TaskProps } from "../../../types/taskType";
import Date from "./date/Date.vue";
import Subtask from "./subtask/Subtask.vue";
import TaskInput from "./taskInput/TaskInput.vue";
import TimeLeft from "./timeLeft/timeLeft.vue";

const emit = defineEmits<{
  (e: "add-subtask", taskId: number, name: string): void;
}>();

const props = defineProps<{
  task: TaskProps;
}>();

const handleAddSubtask = (name: string) => {
  emit("add-subtask", props.task.id, name);
};
</script>

<template>
  <div class="task">
    <div class="task__info">
      <header class="task__title">{{ task.title }}</header>
      <TimeLeft :end-date="task.timeSlots.endDate" />
    </div>
    <div class="task__dates">
      <Date :date="task.timeSlots.startDate" />
      <ArrowRight />
      <Date :date="task.timeSlots.endDate" />
    </div>
    <LineBreak />
    <div class="task__subtasks">
      <div v-for="subtask in task.subtasks">
        <Subtask :sub-task="subtask" />
      </div>
    </div>
    <TaskInput @add-subtask="handleAddSubtask" />
  </div>
</template>

<style lang="scss" scoped>
.task {
  background-color: rgb(31, 31, 31);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__title {
    font-weight: 600;
  }

  &__dates {
    display: flex;
    gap: 12px;
  }

  &__subtasks {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
