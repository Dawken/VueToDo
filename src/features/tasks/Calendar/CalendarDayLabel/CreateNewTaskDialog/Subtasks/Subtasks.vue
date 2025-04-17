<script setup lang="ts">
import AddIcon from "../../../../../../components/icons/AddIcon.vue";
import SubtaskInput from "./SubtaskInput/SubtaskInput.vue";
import type { SubtaskType } from "../../../../../../types/TaskType";

const subtasks = defineModel<SubtaskType[]>("subtasks");

const addSubtask = () => {
  if (!subtasks.value) return;

  subtasks.value.push({
    id: subtasks.value.length + 1,
    name: "",
    completed: false,
  });
};
</script>

<template>
  <div class="subtasks">
    <div class="subtasks__header">Add subtasks</div>
    <SubtaskInput
      v-for="subtask in subtasks"
      :key="subtask.id"
      :subtask="subtask"
      v-model:subtasks="subtasks"
    />
    <button class="subtasks__addButton" @click="addSubtask">
      <AddIcon /> Add new subtask
    </button>
  </div>
</template>

<style lang="scss" scoped>
.subtasks {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__addButton {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    transition-duration: 300ms;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    width: fit-content;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>
