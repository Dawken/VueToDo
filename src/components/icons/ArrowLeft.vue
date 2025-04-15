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
      d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
