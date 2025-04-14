<script setup lang="ts">
import { onMounted, ref } from "vue";
import { format } from "date-fns";
import { timeGridHeight } from "../calendar.constants";

const style = ref({
  top: "0px",
  currentTime: "",
});

const updateTime = () => {
  const currentDate = new Date();

  const formattedTime = format(currentDate, "h:mm a");

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const top = (hours - 8) * timeGridHeight + minutes;

  style.value = {
    top: `${top}px`,
    currentTime: formattedTime,
  };
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<template>
  <div class="hour" :style="style">
    <div class="hour__time">{{ style.currentTime }}</div>
    <div class="hour__line"></div>
  </div>
</template>

<style lang="scss" scoped>
.hour {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  left: -30px;
  color: #c0c0c0;

  &__time {
    font-size: 13px;
  }
  &__line {
    height: 2px;
    background-color: $grey;
    flex: 1;
  }
}
</style>
