<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { SubtaskType } from "../../../../types/taskType";
import CheckMark from "../../../../components/ui/CheckMark.vue";

const emit = defineEmits<{
  (e: "toggle-subtask", id: number): void;
}>();

const props = defineProps<{
  subTask: SubtaskType;
}>();

const handleToggle = () => {
  emit("toggle-subtask", props.subTask.id);
};
</script>

<template>
  <div
    class="subtask"
    :class="{ 'subtask--completed': subTask.completed }"
    @click="handleToggle"
  >
    <CheckMark :completed="subTask.completed" />
    <span :class="{ 'subtask__name--completed': subTask.completed }">
      {{ subTask.name }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.subtask {
  background-color: $grey;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &--completed {
    background-color: #292929;
    color: $light-grey;
  }

  &__name--completed {
    text-decoration: line-through;
    color: "#202020";
  }
}
</style>
