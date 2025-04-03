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
  background-color: #1a1a1a;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  gap: 12px;
}
</style>
