<script setup lang="ts">
import type { SubtaskType } from "../../../types/taskType";

defineProps<{
  subTask: SubtaskType;
}>();
</script>

<template>
  <div class="subtask">
    <label class="checkbox-container">
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <span>{{ subTask.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
.subtask {
  background-color: #eeeeee;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  .checkbox-container {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 18px;
    user-select: none;

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;

      &:checked ~ .checkmark {
        color: black;
        &:after {
          display: block;
        }
      }

      &:disabled ~ .checkmark {
        background-color: #ddd;
        cursor: not-allowed;
      }
    }

    .checkmark {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #eee;
      border: 2px solid #ccc;
      border-radius: 4px;
      transition: all 0.2s ease;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 6px;
        width: 2px;
        height: 5px;
        border: solid rgb(199, 199, 199);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
