<script setup lang="ts">
import { computed } from "vue";
import { format, parseISO } from "date-fns";

const props = defineProps<{
  date: string;
}>();

const formattedTime = computed(() => {
  const formatted = format(parseISO(props.date), "h:mm a");
  return formatted.split(" ");
});

const formattedDate = computed(() =>
  format(parseISO(props.date), "EEE, MMM d")
);
</script>

<template>
  <div class="text-grey">
    <div class="date-time">
      <span class="date-hour">{{ formattedTime[0] }}</span>
      <span class="">{{ formattedTime[1] }}</span>
    </div>
    <div>{{ formattedDate }}</div>
  </div>
</template>

<style lang="scss" scoped>
.date-time {
  display: flex;
  gap: 2px;
  align-items: start;
}
.date-hour {
  font-size: 25px;
  line-height: 25px;
  font-weight: 600;
  color: black;
}
</style>
