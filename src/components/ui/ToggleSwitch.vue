<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <button
    class="toggle-switch"
    :class="{ 'toggle-switch--on': modelValue }"
    @click="toggle"
  >
    <span class="toggle-circle" />
  </button>
</template>

<style scoped lang="scss">
.toggle-switch {
  width: 27px;
  height: 18px;
  background-color: $light-grey;
  border-radius: 15px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &--on {
    background-color: #ffffff;
  }

  .toggle-circle {
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &--on .toggle-circle {
    transform: translateX(7px);
  }
}
</style>
