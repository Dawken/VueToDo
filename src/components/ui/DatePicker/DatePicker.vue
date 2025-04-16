<script setup lang="ts">
import { ref } from "vue";
import { startOfMonth } from "date-fns";
import DateHeader from "./DateHeader/DateHeader.vue";
import DaysPicker from "./DaysPicker/DaysPicker.vue";
import TimeSelection from "./TimeSelection/TimeSelection.vue";
import DateFooter from "./DateFooter/DateFooter.vue";

const finalDate = defineModel<Date | null>("finalDate");

const today = new Date();

const currentMonth = ref(startOfMonth(today));
const selectedDate = ref(today);
const selectedHour = ref("10:00 AM");
</script>

<template>
  <div class="calendar-dialog">
    <div class="calendar-dialog__body">
      <div class="calendar-dialog__body--side">
        <DateHeader v-model:currentMonth="currentMonth" />
        <DaysPicker :current-month="currentMonth" v-model="selectedDate" />
      </div>
      <TimeSelection v-model:selectedHour="selectedHour" />
    </div>
    <DateFooter
      :selectedDate="selectedDate"
      :selectedHour="selectedHour"
      v-model="finalDate"
    />
  </div>
</template>

<style lang="scss" scoped>
.calendar-dialog {
  display: flex;
  flex-direction: column;
  background: #181818;
  border-radius: 22px;
  padding: 10px;
  width: 500px;
  color: #fff;
  border: 1px solid $grey;

  &__body {
    display: flex;
    border-radius: 16px 16px 0 0;
    border: 1px solid $grey;
    &--side {
      border-right: 1px solid $grey;
      padding: 16px;
    }
  }
}
</style>
