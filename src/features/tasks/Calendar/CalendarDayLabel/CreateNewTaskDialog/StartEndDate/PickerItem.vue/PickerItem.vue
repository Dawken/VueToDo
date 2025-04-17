<script setup lang="ts">
import { format } from "date-fns";
import CalendarIcon from "../../../../../../../components/icons/CalendarIcon.vue";
import { ref } from "vue";
import DatePicker from "../../../../../../../components/ui/DatePicker/DatePicker.vue";

const { title } = defineProps<{
  title: string;
}>();
const date = defineModel<string>("date");

const isPickerOpen = ref(false);
</script>

<template>
  <div class="timeSlots__date" @click="isPickerOpen = !isPickerOpen">
    <div class="timeSlots__date--title">{{ title }}</div>
    <div class="timeSlots__date--label">
      <CalendarIcon />
      <div v-if="date">
        {{ format(date, "MMM d, yyyy") }} ·
        {{ format(date, "h:mm") }}
      </div>
      <div class="timeSlots__date--empty" v-else>-</div>
    </div>
    <DatePicker
      v-if="isPickerOpen"
      v-model:finalDate="date"
      v-model:isPickerOpen="isPickerOpen"
      @click.stop
    />
  </div>
</template>

<style lang="scss" scoped>
.timeSlots {
  &__date {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
    position: relative;

    &--title {
      color: $light-grey;
    }
    &--label {
      display: flex;
      align-items: center;
      gap: 5px;
      border: 1px solid $grey;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
    }

    &--empty {
      width: 100%;
      text-align: center;
      font-weight: 600;
    }
  }
}
</style>
