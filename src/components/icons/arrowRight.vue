<script setup lang="ts">
const props = defineProps<{
  width?: number;
  height?: number;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? 20"
    :height="props.height ?? 20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
