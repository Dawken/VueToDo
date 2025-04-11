<script setup lang="ts">
import { computed, ref } from "vue";
import type { TaskProps } from "../../../../types/taskType";
import { isSameDay, parseISO } from "date-fns";
import ArrowRight from "../../../../components/icons/arrowRight.vue";
import Date from "../../TaskDetails/date/Date.vue";
import LineBreak from "../../../../components/ui/LineBreak.vue";
import TimeLeft from "../../TaskDetails/timeLeft/timeLeft.vue";

const props = defineProps<{
  task: TaskProps;
  currentDay: Date;
}>();

const taskRef = ref<HTMLElement | null>(null);

const style = computed(() => {
  const start = parseISO(props.task.timeSlots.startDate);
  const end = parseISO(props.task.timeSlots.endDate);

  const isEndDate = isSameDay(props.currentDay, end);
  const date = isEndDate ? end : start;

  const hour = date.getHours();
  const minute = date.getMinutes();
  let top = (hour - 8) * 61 + minute;

  const taskHeight = taskRef.value ? taskRef.value.offsetHeight : 0;

  if (isEndDate) {
    top -= taskHeight;
  }

  return {
    top: `${top}px`,
  };
});
</script>

<template>
  <div class="task" :style="style" ref="taskRef">
    <div class="task__info">
      <header class="task__title">{{ props.task.title }}</header>
      <TimeLeft :end-date="props.task.timeSlots.endDate" />
    </div>
    <div class="task__dates">
      <Date :date="props.task.timeSlots.startDate" />
      <ArrowRight />
      <Date :date="props.task.timeSlots.endDate" />
    </div>
    <LineBreak />
    <div class="task__subtasks-info">
      <div>
        {{
          props.task.subtasks.filter((subtask) => subtask.completed).length
        }}/{{ props.task.subtasks.length }}
        <span class="task__subtasks-separator"> • </span>
        <span class="task__subtasks-text"> Subtasks completed</span>
      </div>
    </div>
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
  width: 290px;
  left: 5px;
  box-sizing: border-box;
  place-self: center;
  position: absolute;

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
}
</style>
