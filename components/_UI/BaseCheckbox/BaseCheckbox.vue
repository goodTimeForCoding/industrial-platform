<template>
  <div class="check">
    <input
      :id="props.id"
      class="check-input"
      type="checkbox"
      :name="props.id"
      checked
    />
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.check {
  display: flex;
  gap: 5px;
  align-items: flex-start;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  & .check-input {
    margin-top: 4px;
  }
}
</style>
