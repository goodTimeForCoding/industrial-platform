<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="scss" scoped>
.btn {
  padding: 18px 35px;
  border-radius: 4px;
  background: $christi;
  box-shadow: 0 8px 26px 0 rgb(22 44 86 / 10%);
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: $white;

  &:hover,
  &:focus {
    background: $vida;
  }

  &:focus:not(:active) {
    background: $christi;
  }

  &:active {
    background: $sanfelix;
  }
}
</style>
