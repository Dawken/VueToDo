<script setup lang="ts">
import { format, parse } from "date-fns";
import CalendarIcon from "../../../icons/CalendarIcon.vue";

const { selectedDate, selectedHour } = defineProps<{
  selectedDate: Date;
  selectedHour: string;
}>();

const emit = defineEmits(["update:finalDate", "update:isPickerOpen"]);

const confirm = () => {
  const time = parse(selectedHour, "h:mm a", new Date());

  const date = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    time.getHours(),
    time.getMinutes()
  );

  emit("update:finalDate", date.toISOString());
  emit("update:isPickerOpen", false);
};
</script>

<template>
  <div class="calendar-dialog__footer">
    <button
      class="calendar-dialog__footer-btn calendar-dialog__footer-btn--cancel"
      @click="emit('update:isPickerOpen', false)"
    >
      Cancel
    </button>
    <div class="calendar-dialog__footer-date">
      <CalendarIcon />
      {{ format(selectedDate, "MMM d, yyyy") }} · {{ selectedHour }}
    </div>

    <button
      class="calendar-dialog__footer-btn calendar-dialog__footer-btn--confirm"
      @click="confirm"
    >
      Schedule
    </button>
  </div>
</template>

<style scoped lang="scss">
.calendar-dialog {
  &__footer {
    display: flex;
    justify-content: space-between;
    border: 1px solid $grey;
    border-top: none;
    border-radius: 0 0 16px 16px;
    padding: 16px;

    &-date {
      border: 1px solid $grey;
      padding: 10px;
      border-radius: 8px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
    }

    &-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s;

      &--cancel {
        background-color: transparent;
        color: white;
        border: 1px solid $grey;
      }

      &--confirm {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
