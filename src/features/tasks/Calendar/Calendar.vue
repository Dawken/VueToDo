<script setup lang="ts">
import { ref, onMounted } from "vue";
import { format, isSameDay, parseISO } from "date-fns";
import { initialTasks } from "../initialTasks";
import Task from "./Task/Task.vue";
import type { TaskProps } from "../../../types/taskType";

interface Day {
  date: Date;
  formatted: string;
  tasks: TaskProps[];
}
const daysInMonth = ref<Day[]>([]);

const hours = Array.from({ length: 15 }, (_, i) => `${8 + i}:00`);

const getDaysInMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  daysInMonth.value = [];

  for (let day = currentDate.getDate(); day <= lastDay; day++) {
    const date = new Date(year, month, day);
    const formatted = `${day} ${format(date, "EEEE")}`;
    daysInMonth.value.push({
      date: date,
      formatted: formatted,
      tasks: [],
    });
  }

  initialTasks.forEach((task) => {
    const taskStartDate = parseISO(task.timeSlots.startDate);
    const taskEndDate = parseISO(task.timeSlots.endDate);

    daysInMonth.value.forEach((day) => {
      if (
        isSameDay(day.date, taskStartDate) ||
        isSameDay(day.date, taskEndDate)
      ) {
        day.tasks.push(task);
      }
    });
  });
};

onMounted(getDaysInMonth);
</script>

<template>
  <section class="calendar">
    <div class="calendar__time-grid">
      <div v-for="hour in hours" :key="hour" class="calendar__time-slot">
        {{ hour }}
      </div>
    </div>
    <div class="calendar__dates">
      <div
        class="calendar__dates-label"
        v-for="day in daysInMonth"
        :key="day.date.getTime()"
      >
        <header class="calendar__dates-header">
          {{ day.formatted }}
        </header>

        <Task
          v-for="task in day.tasks"
          :key="task.id"
          :task="task"
          :currentDay="day.date"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.calendar {
  display: flex;
  font-family: sans-serif;
  max-width: 1200px;

  &__time-grid {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-right: 8px;

    .calendar__time-slot {
      height: 60px;
      border-bottom: 1px dashed $grey;
      text-align: right;
      padding-right: 10px;
      color: #777;
    }
  }

  &__dates {
    display: flex;
    flex: 1;
    overflow-x: auto;
  }

  &__dates-label {
    position: relative;
    min-width: 300px;
  }

  &__dates-header {
    position: sticky;
    top: 0;
    text-align: center;
    font-weight: bold;
    padding: 8px 0;
    border-bottom: 1px solid $grey;
    z-index: 1;
  }
}
</style>
