<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="scss" scoped>
.btn {
  padding: 18px 35px;
  color: $white;
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
  background: $christi;
  border-radius: 4px;
  box-shadow: 0 8px 26px 0 rgba(22, 44, 86, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

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
