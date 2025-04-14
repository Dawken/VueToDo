<script setup lang="ts">
import { ref, onMounted } from "vue";
import { format, isSameDay, parseISO } from "date-fns";
import { initialTasks } from "../initialTasks";
import TimeLine from "./TimeLine/TimeLine.vue";
import CalendarDayLabel from "./CalendarDayLabel/CalendarDayLabel.vue";
import type { DayType } from "../../../types/DayType";

const daysInMonth = ref<DayType[]>([]);

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
        <CalendarDayLabel :day="day" />
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
}
</style>
