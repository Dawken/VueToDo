<script setup lang="ts">
import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isToday,
  startOfMonth,
  subDays,
} from "date-fns";
import { computed } from "vue";

const props = defineProps<{
  currentMonth: Date;
  modelValue: Date;
}>();

const emit = defineEmits(["update:modelValue"]);

const daysInMonth = computed(() => {
  const start = startOfMonth(props.currentMonth);
  const end = endOfMonth(props.currentMonth);

  let firstDay = start;
  while (getDay(firstDay) !== 1) {
    firstDay = subDays(firstDay, 1);
  }

  let lastDay = end;
  while (getDay(lastDay) !== 0) {
    lastDay = addDays(lastDay, 1);
  }

  return eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  });
});
</script>

<template>
  <div class="calendar-dialog__grid">
    <div class="calendar-dialog__weekdays">
      <div
        v-for="day in ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']"
        :key="day"
        class="calendar-dialog__weekdays-item"
      >
        {{ day }}
      </div>
    </div>
    <div class="calendar-dialog__days">
      <div
        v-for="day in daysInMonth"
        :key="day.toISOString()"
        :class="[
          'calendar-dialog__days-day',
          {
            'calendar-dialog__days-day--outside':
              day.getMonth() !== currentMonth.getMonth(),
            'calendar-dialog__days-day--selected': isSameDay(day, modelValue),
            'calendar-dialog__days-day--today': isToday(day),
          },
        ]"
        @click="emit('update:modelValue', day)"
      >
        {{ format(day, "d") }}
        <span
          v-if="isToday(day)"
          class="calendar-dialog__days-day__today-indicator"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar-dialog {
  &__grid {
    display: flex;
    flex-direction: column;
  }

  &__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 35px);
    gap: 8px;
    text-align: center;
    margin-bottom: 12px;

    &-item {
      font-size: 12px;
      color: #aaa;
      font-weight: 500;
    }
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 35px);
    gap: 8px;

    &-day {
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
      position: relative;

      &--outside {
        color: #555;
      }

      &--selected {
        background-color: $grey;
        transition-duration: 300ms;
        color: white;
      }

      &__today-indicator {
        position: absolute;
        bottom: 4px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
      }

      &--today {
        border: 1px solid $grey;
      }

      &--today &__today-indicator {
        background-color: white;
      }

      &--selected &__today-indicator {
        background-color: white;
      }
    }
  }
}
</style>
