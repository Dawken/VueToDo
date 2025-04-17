<script setup lang="ts"></script>

<template>
  <div class="title">
    <div class="title__name">Task name</div>
    <input type="text" class="title__input" />
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  &__name {
    font-size: 14px;
  }

  &__input {
    width: 100%;
    background-color: transparent;
    border: 1px solid $grey;
    border-radius: 10px;
    outline: none;
    font-family: Gilroy;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
