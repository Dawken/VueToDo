<script setup lang="ts">
import { format } from "date-fns";

const props = defineProps<{
  selectedDate: Date;
  selectedHour: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const confirm = () => {
  const [time, meridian] = props.selectedHour.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;

  const date = new Date(
    props.selectedDate.getFullYear(),
    props.selectedDate.getMonth(),
    props.selectedDate.getDate(),
    hours,
    minutes
  );

  emit("update:modelValue", date);
};
</script>

<template>
  <div class="calendar-dialog__footer">
    <button
      class="calendar-dialog__footer-btn calendar-dialog__footer-btn--cancel"
    >
      Cancel
    </button>
    <div class="calendar-dialog__time-selection-date">
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

    &-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: all 0.2s;

      &--cancel {
        background-color: transparent;
        color: #aaa;

        &:hover {
          background-color: #282828;
        }
      }

      &--confirm {
        background-color: #6c63ff;
        color: white;

        &:hover {
          background-color: #5a52d6;
        }
      }
    }
  }
}
</style>
