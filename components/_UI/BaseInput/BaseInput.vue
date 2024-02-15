<template>
  <input :value="modelValue" v-bind="$attrs" @input="inputHundler" />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    inputHundler(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
