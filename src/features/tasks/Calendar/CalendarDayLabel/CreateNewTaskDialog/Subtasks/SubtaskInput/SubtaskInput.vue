<script setup lang="ts">
import TrashIcon from "../../../../../../../components/icons/TrashIcon.vue";
import type { SubtaskType } from "../../../../../../../types/TaskType";

const { subtask } = defineProps<{ subtask: SubtaskType }>();
const subtasks = defineModel<SubtaskType[]>("subtasks");

const removeSubtasks = () => {
  subtasks.value = subtasks.value?.filter((task) => task.id !== subtask.id);
};
</script>

<template>
  <div class="subtask">
    <input type="text" class="subtask__input" placeholder="Enter name" />
    <button class="subtask__deleteButton" @click="removeSubtasks">
      <TrashIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.subtask {
  display: flex;
  gap: 12px;

  &__input {
    width: 100%;
    border: 1px solid $grey;
    border-radius: 10px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  &__deleteButton {
    cursor: pointer;
    transition-duration: 300ms;

    &:hover {
      color: #ff0000;
    }
  }
}
</style>
