<script setup lang="ts">
import { ref, onMounted } from "vue";
import { format, isSameDay, parseISO } from "date-fns";
import { initialTasks } from "../initialTasks";
import Task from "./Task/Task.vue";
import type { TaskProps } from "../../../types/taskType";
import TimeLine from "./TimeLine/TimeLine.vue";
import AddTask from "./AddTask/AddTask.vue";

interface Day {
  date: Date;
  formatted: string;
  tasks: TaskProps[];
}
const daysInMonth = ref<Day[]>([]);

const hours = Array.from({ length: 15 }, (_, i) => {
  const hourDate = new Date(0, 0, 0, 8 + i);
  return format(hourDate, "h a");
});
const getDaysInMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  daysInMonth.value = [];

  for (let day = 1; day <= lastDay; day++) {
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
        class="calendar__dates-label calendar__day"
        v-for="day in daysInMonth"
        :key="day.date.getTime()"
      >
        <div class="calendar__day-header">
          <span class="calendar__day-header__name">{{
            day.formatted.split(" ")[0]
          }}</span>
          <span class="calendar__day-header__weekday">{{
            day.formatted.split(" ")[1]
          }}</span>
        </div>
        <Task
          v-for="task in day.tasks"
          :key="task.id"
          :task="task"
          :currentDay="day.date"
        />
        <AddTask />
      </div>
    </div>
    <TimeLine />
  </section>
</template>

<style lang="scss" scoped>
.calendar {
  display: flex;
  max-width: 1200px;
  position: relative;
  &__time-grid {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-right: 8px;
    position: relative;
  }

  &__time-slot {
    height: 60px;
    position: relative;
    text-align: right;
    padding-right: 10px;
    color: $light-grey;
    font-weight: 500;

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #282828;
      box-shadow: 0 10px 0 0 #282828, 0 20px 0 0 #282828, 0 30px 0 0 #282828;
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
