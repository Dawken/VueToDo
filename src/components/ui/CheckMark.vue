<script setup lang="ts"></script>

<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input" />
    <span class="checkbox__checkmark"></span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkbox__checkmark {
      color: black;

      &::after {
        display: block;
      }
    }

    &:disabled ~ .checkbox__checkmark {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }

  &__checkmark {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #eee;
    border: 2px solid #ccc;
    border-radius: 4px;
    transition: all 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 5px;
      top: 6px;
      width: 2px;
      height: 5px;
      border: solid rgb(199, 199, 199);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
