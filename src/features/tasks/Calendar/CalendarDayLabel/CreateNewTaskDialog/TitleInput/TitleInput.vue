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
  font-size: 14px;
  &__name {
    color: $light-grey;
  }

  &__input {
    width: 100%;
    background-color: $grey;
    border: 2px solid $grey;
    border-radius: 10px;
    color: #fff;
    height: 100%;
    outline: none;
    font-family: Gilroy;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
