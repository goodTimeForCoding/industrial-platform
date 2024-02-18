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
          <SvgoSidebarArrow :class="['arrow-img', arrowRotate]" />

          <span v-if="!zyfraStore.isSidebarClosed" class="control-text">
            {{ $t('sidebar.closeMenu') }}
          </span>

          <span v-if="zyfraStore.isSidebarClosed" class="control-text">
            {{ $t('sidebar.openMenu') }}
          </span>
        </div>

        <NuxtLink
          v-if="zyfraStore.isIndustryActive || !zyfraStore.isSidebarClosed"
          :class="['nav-link', addIndustryActiveClass]"
          @click="zyfraStore.setIndustryActive"
        >
        </NuxtLink>

        <transition name="slide-fade">
          <div
            v-if="zyfraStore.isIndustryActive || !zyfraStore.isSidebarClosed"
            :class="['nav-item', addIndustryActiveClass]"
            @click="zyfraStore.setIndustryActive"
          >
            {{ $t('sidebar.branch') }}
          </div>
        </transition>

        <transition name="slide-fade">
          <div
            v-if="zyfraStore.isProductsActive || !zyfraStore.isSidebarClosed"
            :class="['nav-item', addProductsActiveClass]"
            @click="zyfraStore.setProductsActive"
          >
            {{ $t('sidebar.products') }}
          </div>
        </transition>

        <transition name="slide-fade">
          <div
            v-if="zyfraStore.isEducationActive || !zyfraStore.isSidebarClosed"
            :class="['nav-item', addEducationActiveClass]"
            @click="zyfraStore.setEducationActive"
          >
            {{ $t('sidebar.education') }}
          </div>
        </transition>

        <transition name="slide-fade">
          <div
            v-if="zyfraStore.isFeedbackActive || !zyfraStore.isSidebarClosed"
            :class="['nav-item', addFeedbackActiveClass]"
            @click="zyfraStore.setFeedbackActive"
          >
            {{ $t('sidebar.feedback') }}
          </div>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';

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
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.sidebar {
  position: fixed;
  color: $white;
  font-size: 12px;

  & .sidebar-wrap {
    padding-right: 43px;
    padding-left: 44px;
  }

  & .sidebar-close-wrap {
    max-width: 150px;
    padding-right: 5px;
    padding-left: 10px;
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
