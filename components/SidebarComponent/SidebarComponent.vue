<template>
  <div class="sidebar">
    <div :class="['sidebar-wrap', addCloseWrap]">
      <div class="logo-wrap">
        <NuxtLink class="logo-link" :to="localePath('/industries/dip')">
          <img
            class="logo-img"
            :src="$t('sidebar.icon')"
            width="118"
            height="41"
            alt="логотип компании"
          />
        </NuxtLink>
      </div>
      <nav class="page-nav">
        <div class="control" @click="zyfraStore.toggleSidebar()">
          <SidebarArrow :class="['arrow-img', arrowRotate]" />
          <span class="control-text" v-if="!zyfraStore.isSidebarClosed">
            {{ $t('sidebar.closeMenu') }}
          </span>
          <span class="control-text" v-if="zyfraStore.isSidebarClosed">
            {{ $t('sidebar.openMenu') }}
          </span>
        </div>

        <NuxtLink
          :class="['nav-link', addIndustryActiveClass]"
          @click="zyfraStore.setIndustryActive"
          v-if="zyfraStore.isIndustryActive || !zyfraStore.isSidebarClosed"
        >
        </NuxtLink>
        <div
          :class="['nav-item', addIndustryActiveClass]"
          @click="zyfraStore.setIndustryActive"
          v-if="zyfraStore.isIndustryActive || !zyfraStore.isSidebarClosed"
        >
          {{ $t('sidebar.branch') }}
        </div>

        <div
          :class="['nav-item', addProductsActiveClass]"
          @click="zyfraStore.setProductsActive"
          v-if="zyfraStore.isProductsActive || !zyfraStore.isSidebarClosed"
        >
          {{ $t('sidebar.products') }}
        </div>

        <div
          :class="['nav-item', addEducationActiveClass]"
          @click="zyfraStore.setEducationActive"
          v-if="zyfraStore.isEducationActive || !zyfraStore.isSidebarClosed"
        >
          {{ $t('sidebar.education') }}
        </div>

        <div
          :class="['nav-item', addFeedbackActiveClass]"
          @click="zyfraStore.setFeedbackActive"
          v-if="zyfraStore.isFeedbackActive || !zyfraStore.isSidebarClosed"
        >
          {{ $t('sidebar.feedback') }}
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
import SidebarArrow from '@/assets/icons/sidebar-arrow.svg';
const zyfraStore = useZyfraStore();
const localePath = useLocalePath();

const addIndustryActiveClass = computed(() => {
  if (zyfraStore.isIndustryActive) return 'nav-item-active';
});

const addProductsActiveClass = computed(() => {
  if (zyfraStore.isProductsActive) return 'nav-item-active';
});

const addEducationActiveClass = computed(() => {
  if (zyfraStore.isEducationActive) return 'nav-item-active';
});

const addFeedbackActiveClass = computed(() => {
  if (zyfraStore.isFeedbackActive) return 'nav-item-active';
});

const arrowRotate = computed(() => {
  if (zyfraStore.isSidebarClosed) return 'arrow-img--rotate';
});

const addCloseWrap = computed(() => {
  if (zyfraStore.isSidebarClosed) return 'sidebar-close-wrap';
});
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  color: $white;
  font-size: 12px;

  & .sidebar-wrap {
    padding-right: 43px;
    padding-left: 44px;
  }

  & .sidebar-close-wrap {
    padding-right: 5px;
    padding-left: 10px;
    max-width: 150px;
  }

  & .page-nav {
    top: 20px;
  }

  & .logo-wrap {
    margin-top: 29px;
    margin-bottom: 61px;
  }

  & .logo-img {
    width: 118px;
  }

  & .control {
    display: flex;
    height: 14px;
    margin-bottom: 20px;
    color: $christi;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      font-size: 14px;
    }
  }

  & .control-text {
    display: inline-block;
    margin-left: 6.5px;
  }

  & .nav-item {
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: $christi;
    }
  }

  & .nav-item-active {
    color: $abbey;
  }

  & .arrow-img--rotate {
    transform: rotate(180deg);
  }
}
</style>
