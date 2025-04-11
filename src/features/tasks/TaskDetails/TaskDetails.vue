<script setup lang="ts">
import { computed, ref } from "vue";
import ArrowRight from "../../../components/icons/arrowRight.vue";
import LineBreak from "../../../components/ui/LineBreak.vue";
import ToggleSwitch from "../../../components/ui/ToggleSwitch.vue";
import type { TaskProps } from "../../../types/taskType";
import Date from "./date/Date.vue";
import Subtask from "./subtask/Subtask.vue";
import TaskInput from "./taskInput/TaskInput.vue";
import TimeLeft from "./timeLeft/timeLeft.vue";

const emit = defineEmits<{
  (e: "add-subtask", name: string): void;
  (e: "toggle-subtask", subtaskId: number): void;
}>();

const props = defineProps<{
  task: TaskProps;
}>();

const isToggled = ref(true);

const filteredTasks = computed(() => {
  return props.task.subtasks.filter((subtask) =>
    isToggled.value ? subtask : !subtask.completed
  );
});
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
    <div class="task__subtasks-info">
      <div>
        {{ task.subtasks.filter((subtask) => subtask.completed).length }}/{{
          task.subtasks.length
        }}
        <span class="task__subtasks-separator"> • </span>
        <span class="task__subtasks-text"> Subtasks completed</span>
      </div>
      <div class="task__subtasks-toggle">
        <ToggleSwitch v-model="isToggled" />
        <span>{{ isToggled ? "Hide completed" : "Show completed" }}</span>
      </div>
    </div>
    <div class="task__subtasks">
      <div v-for="subtask in filteredTasks">
        <Subtask
          :sub-task="subtask"
          @toggle-subtask="(subtaskId) => emit('toggle-subtask', subtaskId)"
        />
      </div>
    </div>
    <TaskInput @add-subtask="(name) => emit('add-subtask', name)" />
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
  width: 400px;
  box-sizing: border-box;
  place-self: center;

  @media (max-width: 600px) {
    max-width: 90%;
  }

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

  &__subtasks-info {
    font-size: 15px;
    color: $light-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__subtasks-separator {
    margin: 0 3px;
  }

  &__subtasks-text {
    font-size: 15px;
    color: white;
  }

  &__subtasks-toggle {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  &__subtasks {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
