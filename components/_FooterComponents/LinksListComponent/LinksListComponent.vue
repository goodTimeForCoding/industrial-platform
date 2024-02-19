<template>
  <div class="footer-links">
    <h3 class="footer-links-title">{{ title }}</h3>
    <ul class="footer-links-list list-reset">
      <li v-for="menu in props.links" :key="menu.id" class="footer-links-item">
        <NuxtLink class="footer-links-link">
          {{ $t(menu.name) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.footer-links {
  & .footer-links-title {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    color: $black;
    font-weight: 600;
    font-size: 14px;
  }

  & .footer-links-item {
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    color: $black;

    &:hover {
      color: $christi;
    }
  }
}
</style>
