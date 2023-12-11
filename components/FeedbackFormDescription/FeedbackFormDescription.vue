<template>
  <div class="feedback-form-description-component">
    <h1 class="description-title">{{ addTitle }}</h1>
    <p class="description-text">
      {{ $t('formDescription.text') }}
    </p>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
const zyfraStore = useZyfraStore();
const i18nLocale = useI18n();

const currentLocale = i18nLocale.locale.value;
const MINITABLET_BREAKPOINT = 768;

const addTitle = computed(() => {
  if (zyfraStore.screenWidth < MINITABLET_BREAKPOINT && currentLocale === 'ru')
    return 'Свяжитесь с нами';
  if (zyfraStore.screenWidth < MINITABLET_BREAKPOINT && currentLocale === 'en')
    return 'Contact us';
  if (currentLocale === 'ru') return 'Будем на связи';
  if (currentLocale === 'en') return "Let's be in touch";
});
</script>

<style lang="scss" scoped>
.feedback-form-description-component {
  .description-title {
    margin: 0;
    margin-bottom: 24px;
    margin-top: 19px;
    font-weight: 700;
    font-size: 22px;
  }

  .description-text {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}

@include mobile {
  .feedback-form-description-component {
    .description-title {
      margin-bottom: 31px;
    }
  }
}
</style>
