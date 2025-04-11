<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "add-subtask", name: string): void;
}>();

const newSubtask = ref("");

const handleAdd = () => {
  if (newSubtask.value.trim()) {
    emit("add-subtask", newSubtask.value.trim());
    newSubtask.value = "";
  }
};
</script>

<template>
  <div class="input">
    <textarea
      class="input__textarea"
      v-model="newSubtask"
      type="text"
      placeholder="Add subtask"
      @keydown.enter.prevent="handleAdd"
    />
    <button class="input__button" @click="handleAdd">Add</button>
  </div>
</template>

<style lang="scss" scoped>
.input {
  padding: 12px;
  background-color: $grey;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  &__textarea {
    flex: 1;
    max-width: 80%;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    height: 100%;
    outline: none;
    font-size: 15px;
    font-weight: 500;
    resize: none;
    font-family: Gilroy;
  }

  &__button {
    padding: 7px 14px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    place-self: end;
  }
}
</style>
