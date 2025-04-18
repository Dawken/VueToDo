<script setup lang="ts">
import type { TaskType } from "../../../../../../types/TaskType";

const taskData = defineModel<TaskType>("taskData");

const tasks = defineModel<TaskType[]>("tasks");

const isCreateNewTaskDialogOpen = defineModel("isCreateNewTaskDialogOpen");

const createTask = () => {
  if (!tasks.value || !taskData.value) return;

  tasks.value.push(taskData.value);
};
</script>

<template>
  <div class="footer">
    <button
      class="footer__btn footer__btn--cancel"
      @click="isCreateNewTaskDialogOpen = false"
    >
      Cancel
    </button>
    <button class="footer__btn footer__btn--confirm" @click="createTask">
      Confirm
    </button>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &__btn {
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
</style>
