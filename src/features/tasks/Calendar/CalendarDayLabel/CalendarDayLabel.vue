<script setup lang="ts">
import { ref } from "vue";
import Task from "./Task/Task.vue";
import AddTask from "./AddTask/AddTask.vue";
import CreateNewTaskDialog from "./CreateNewTaskDialog/CreateNewTaskDialog.vue";
import type { DayType } from "../../../../types/DayType";
import type { TaskType } from "../../../../types/TaskType";

const tasks = defineModel<TaskType[]>("tasks");
const props = defineProps<{
  day: DayType;
}>();

const isCreateNewTaskDialogOpen = ref(false);
</script>

<template>
  <div class="calendar__day-header">
    <span class="calendar__day-header__name">{{
      props.day.formatted.split(" ")[0]
    }}</span>
    <span class="calendar__day-header__weekday">{{
      props.day.formatted.split(" ")[1]
    }}</span>
  </div>
  <Task
    v-for="task in day.tasks"
    :key="task.id"
    :task="task"
    :currentDay="day.date"
  />
  <AddTask v-model="isCreateNewTaskDialogOpen" />
  <CreateNewTaskDialog
    v-model:isCreateNewTaskDialogOpen="isCreateNewTaskDialogOpen"
    v-model:tasks="tasks"
  />
</template>
<style lang="scss" scoped>
.calendar {
  &__day-header {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    background-color: #181818;
    border-radius: 12px;
    padding: 8px 0px;
    margin: 5px;
  }

  &__day-header__name {
    font-weight: bold;
    font-size: 16px;
  }

  &__day-header__weekday {
    font-size: 12px;
    color: $light-grey;
  }

  &__dates-header {
    position: sticky;
    top: 0;
    text-align: center;
    font-weight: bold;
    padding: 8px 0;
  }
}
</style>
