<script setup lang="ts">
const selectedHour = defineModel<string>("selectedHour");

const hours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
</script>

<template>
  <div class="calendar-dialog__time-selection">
    <div class="calendar-dialog__time-selection-hours">
      <div
        v-for="hour in hours"
        :key="hour"
        :class="[
          'calendar-dialog__time-selection-hours-item',
          {
            'calendar-dialog__time-selection-hours-item--selected':
              hour === selectedHour,
          },
        ]"
        @click="selectedHour = hour"
      >
        {{ hour }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar-dialog {
  &__time-selection {
    flex: 1;
    padding: 10px;
    &-date {
      font-size: 14px;
      color: #aaa;
      margin-bottom: 12px;
      text-align: center;
    }

    &-hours {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      max-height: 320px;
      overflow-y: auto;
      padding-right: 8px;

      &-item {
        padding: 6px;
        border-radius: 8px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: #333;
        }

        &--selected {
          background-color: $grey;
          color: white;
        }
      }
    }
  }
}
</style>
