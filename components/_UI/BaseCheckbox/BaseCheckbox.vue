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
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  gap: 5px;

  & .check-input {
    margin-top: 4px;
  }
}
</style>
