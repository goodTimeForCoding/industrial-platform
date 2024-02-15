<template>
  <div class="check">
    <input class="check-input" type="checkbox" :name="id" :id="id" checked />
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  id: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.check {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  & .check-input {
    margin-top: 4px;
  }
}
</style>
