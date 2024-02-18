<template>
  <div class="lang-switcher">
    <NuxtLink
      class="lang-link"
      :to="switchLocalePath('en')"
      @click="cleanArr()"
    >
      <div class="language-item">EN</div>
    </NuxtLink>
    <div>&nbsp|&nbsp</div>
    <NuxtLink
      class="lang-link"
      :to="switchLocalePath('ru')"
      @click="cleanArr()"
    >
      <div class="language-item">RU</div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useFeedbackForm } from '@/store/FeedbackForm';

const feedbackFormStore = useFeedbackForm();
const switchLocalePath = useSwitchLocalePath();
const cleanArr = () => {
  feedbackFormStore.cleanErrors();
  feedbackFormStore.cleanMessages();
};
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  width: 51px;

  & .lang-link {
    color: inherit;
  }

  & .language-item {
    width: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;
  }

  &-header .router-link-active .language-item,
  &-header .language-item:hover {
    font-weight: 700;
  }

  &-footer .router-link-active .language-item,
  &-footer .language-item:hover {
    color: $christi;
    font-weight: 700;
  }
}

@include tablet {
  .lang-switcher {
    justify-content: start;
    width: 100%;

    &-header .router-link-active .language-item,
    &-header .language-item:hover {
      color: $christi;
      font-weight: 700;
    }
  }
}
</style>
