<template>
  <Html :lang="$t('head.lang')">
    <div>
      <Head>
        <Title>{{ $t('head.title') }}</Title>
        <Meta name="description" :content="$t('head.description')" />
        <Meta name="charset" content="utf-8" />
      </Head>
    </div>
    <div class="page">
      <div class="page-wrap">
        <HeaderNavComponent />
        <NuxtPage />
        <FooterComponent />
      </div>
      <div
        v-if="isDesktopBreakpoint()"
        :class="['sidebar-container', sidebarClose]"
      >
        <SidebarComponent />
      </div>
      <div v-if="zyfraStore.isShowModal">
        <FormModalComponent />
      </div>
    </div>
  </Html>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
import { createHydrationRenderer } from 'vue';

const DESKTOP_BREAKPOINT = 1025;
const zyfraStore = useZyfraStore();

const isDesktopBreakpoint = () => {
  if (zyfraStore.screenWidth >= DESKTOP_BREAKPOINT) return true;
  return false;
};

const onScreenResize = () => {
  window.addEventListener('resize', () => {
    zyfraStore.updateScreenWidth();
  });
};

const onScrollDistanceResize = () => {
  window.addEventListener('scroll', () => {
    zyfraStore.updateScrollDistance();
    if (zyfraStore.scrollDistance >= zyfraStore.toIndustryDistance - 5) {
      zyfraStore.setIndustryActiveClass();
    }
    if (zyfraStore.scrollDistance >= zyfraStore.toProductsDistance - 5) {
      zyfraStore.setProductsActiveClass();
    }
    if (zyfraStore.scrollDistance >= zyfraStore.toEducationDistance - 5) {
      zyfraStore.setEducationActiveClass();
    }
    if (zyfraStore.scrollDistance >= zyfraStore.toFeedbackDistance - 5) {
      zyfraStore.setFeedbackActiveClass();
    }
  });
};

createHydrationRenderer;

const sidebarClose = computed(() => {
  return zyfraStore.isSidebarClosed ? 'sidebar-container-close' : '';
});

onMounted(() => {
  zyfraStore.updateScreenWidth();
  onScreenResize();
  zyfraStore.updateScrollDistance();
  onScrollDistanceResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    zyfraStore.updateScreenWidth();
  });
});
</script>

<style lang="scss" scoped>
@include desktop {
  .page {
    display: flex;
  }

  .page-wrap {
    flex: 1 1 auto;
    order: 1;
    overflow: hidden;
    transition: width 0.3s;
    width: 100%;
  }

  .sidebar-container {
    flex: 1 0 auto;
    width: 100%;
    max-width: 284px;
  }

  .sidebar-container-close {
    max-width: 150px;
  }
}
</style>
