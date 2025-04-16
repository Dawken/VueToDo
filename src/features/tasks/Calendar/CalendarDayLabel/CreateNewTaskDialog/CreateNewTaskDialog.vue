<script setup lang="ts">
import { ref } from "vue";
import TitleInput from "./TitleInput/TitleInput.vue";
import StartEndDate from "./StartEndDate/StartEndDate.vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};

const taskData = ref({
  title: "",
  timeSlots: {
    startDate: "",
    endDate: "",
  },
  subtasks: [],
});
</script>

<template>
  <transition name="fade">
    <div v-if="props.modelValue" class="overlay" @click="toggle">
      <div class="createTask" @click.stop>
        <header class="createTask__title">Create new task</header>
        <TitleInput />
        <StartEndDate v-model:taskData="taskData" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.overlay {
  z-index: 20;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .createTask {
    background-color: $dark-grey;
    padding: 20px;
    border-radius: 12px;
    z-index: 30;
    display: flex;
    flex-direction: column;
    gap: 20px;

    font-size: 14px;
  }

  .createTask__title {
    font-size: 20px;
  }
}
</style>
