<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  endDate: string;
}>();
const calculateTimeLeft = () => {
  const now = new Date();
  const timeLeft = new Date(props.endDate);
  const totalSeconds = Math.max((timeLeft.getTime() - now.getTime()) / 1000, 0);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor(totalSeconds / (60 * 60));
  const minutes = Math.floor(totalSeconds / 60);

  if (days > 0) {
    return `${days}d left`;
  }

  if (hours > 0) {
    return `${hours}h left`;
  }

  if (minutes > 0) {
    return `${minutes}m left`;
  }

  return "Times up";
};

const timeLeft = computed(() => calculateTimeLeft());
</script>
<template>
  <div class="time-left">{{ timeLeft }}</div>
</template>

<style lang="scss" scoped>
.time-left {
  color: $light-grey;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
</style>
