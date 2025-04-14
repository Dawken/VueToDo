<script setup lang="ts">
import AddIcon from "../../../../components/icons/AddIcon.vue";
</script>

<template>
  <div class="addIcon"><AddIcon /> Add Task</div>
</template>

<style lang="scss" scoped>
.addIcon {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: $light-grey;
  padding: 10px;
  border-radius: 8px;
  transition-duration: 300ms;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  bottom: 5px;
  left: 0;
  cursor: pointer;
  opacity: 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  .calendar__day:hover & {
    opacity: 1;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
}
</style>
