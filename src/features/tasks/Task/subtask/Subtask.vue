<script setup lang="ts">
import CheckMark from "../../../../components/ui/CheckMark.vue";
import type { SubtaskType } from "../../../../types/taskType";

defineProps<{
  subTask: SubtaskType;
}>();
</script>

<template>
  <div class="subtask">
    <CheckMark />
    <span>{{ subTask.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
.subtask {
  background-color: $grey;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
