<script setup lang="ts">
import { addMonths, format, subMonths } from "date-fns";
import ArrowRight from "../../../icons/ArrowRight.vue";
import ArrowLeft from "../../../icons/ArrowLeft.vue";

const currentMonth = defineModel<Date>("currentMonth");

const changeMonth = (delta: number) => {
  if (!currentMonth.value) return;
  currentMonth.value =
    delta > 0
      ? addMonths(currentMonth.value, 1)
      : subMonths(currentMonth.value, 1);
};
</script>

<template>
  <div class="calendar-dialog__header">
    <button class="calendar-dialog__navigate-button" @click="changeMonth(-1)">
      <ArrowLeft :width="15" :height="15" />
    </button>
    <h2 v-if="currentMonth">{{ format(currentMonth, "MMMM yyyy") }}</h2>
    <button class="calendar-dialog__navigate-button" @click="changeMonth(1)">
      <ArrowRight :width="15" :height="15" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.calendar-dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .calendar-dialog__navigate-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $light-grey;
    background-color: transparent;
    border: 1px solid $light-grey;
    border-radius: 8px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  h2 {
    font-size: 15px;
  }
}
</style>
