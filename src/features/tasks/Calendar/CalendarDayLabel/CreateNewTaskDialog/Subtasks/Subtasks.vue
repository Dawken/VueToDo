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
  &__header {
    color: $light-grey;
  }

  &__input {
    width: 100%;
    background-color: $grey;
    border: 2px solid $grey;
    border-radius: 10px;
    color: #fff;
    height: 100%;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }

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
