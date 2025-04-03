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
    return `${days}d`;
  }

  if (hours > 0) {
    return `${hours}h`;
  }

  if (minutes > 0) {
    return `${minutes}m`;
  }

  return "Czas minął!";
};

const timeLeft = computed(() => calculateTimeLeft());
</script>
<template>
  <div class="time-left text-grey">{{ timeLeft }} left</div>
</template>

<style lang="scss" scoped>
.time-left {
  background: #f7f7f7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>
