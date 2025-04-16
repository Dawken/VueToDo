<script setup lang="ts">
import type { TaskType } from "../../../../../../types/TaskType";
import ArrowRight from "../../../../../../components/icons/ArrowRight.vue";
import PickerItem from "./PickerItem.vue/PickerItem.vue";

const taskData = defineModel<TaskType>("taskData");
</script>

<template>
  <div class="timeSlots" v-if="taskData">
    <PickerItem
      v-model:date="taskData.timeSlots.startDate"
      title="Start date"
    />
    <ArrowRight :width="18" :height="18" />
    <PickerItem v-model:date="taskData.timeSlots.endDate" title="End date" />
  </div>
</template>

<style lang="scss" scoped>
.timeSlots {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
</style>
