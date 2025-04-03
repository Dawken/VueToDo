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
  <div class="date">
    <div class="date__time">
      <span class="date__hour">{{ formattedTime[0] }}</span>
      <span class="date__period">{{ formattedTime[1] }}</span>
    </div>
    <div class="date__full">{{ formattedDate }}</div>
  </div>
</template>

<style lang="scss" scoped>
.date {
  color: grey;

  &__time {
    display: flex;
    gap: 2px;
    align-items: start;
  }

  &__hour {
    font-size: 25px;
    line-height: 25px;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }

  &__period {
    font-size: 14px;
    align-self: center;
  }

  &__full {
    font-size: 14px;
  }
}
</style>
