<script setup lang="ts"></script>

<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input" />
    <span class="checkbox__box"></span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkbox__box {
      background-color: #6c63ff;
      border-color: #6c63ff;
    }

    &:disabled ~ .checkbox__box {
      background-color: #ddd;
      border-color: #aaa;
      cursor: not-allowed;
    }
  }

  &__box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 2px solid #202020;
    border-radius: 4px;
    transition: background-color 0.2s, border-color 0.2s;
  }
}
</style>
