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
        <HeaderComponent />
        <NuxtPage />
        <FooterComponent />
      </div>
      <div
        v-if="isDesktopBreakpoint()"
        :class="['sidebar-container', sidebarClose]"
      >
        <SidebarComponent />
      </div>
      <div v-if="modalStore.isShowModal">
        <FormModalComponent />
      </div>
    </div>
  </Html>
</template>

<script setup>
import HeaderComponent from '@/components/_HeaderComponents/HeaderComponent/HeaderComponent.vue';
import FooterComponent from '@/components/_FooterComponents/FooterComponent/FooterComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore';
import { useModalStore } from '@/store/ModalStore';

const DESKTOP_BREAKPOINT = 1179;
const zyfraStore = useZyfraStore();
const modalStore = useModalStore();

const isDesktopBreakpoint = () => {
  return zyfraStore.screenWidth >= DESKTOP_BREAKPOINT;
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

const sidebarClose = computed(() => {
  return zyfraStore.isSidebarClosed
    ? 'sidebar-container-close'
    : 'sidebar-container-open';
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
.page {
  display: flex;
}

.page-wrap {
  flex: 1 1 auto;
  order: 1;
  width: 100%;
  overflow: hidden;
  transition: width 0.3s;
}

.sidebar-container {
  flex: 1 0 auto;
  width: 100%;
}

.sidebar-container-open {
  max-width: 284px;
  animation-name: slideopen;
  animation-duration: 0.5s;
}

@keyframes slideopen {

  from {
    max-width: 150px;
  }

  to {
    max-width: 284px;
  }
}

.sidebar-container-close {
  max-width: 150px;
  animation-name: slideclose;
  animation-duration: 0.5s;
}

@keyframes slideclose {

  from {
    max-width: 284px;
  }

  to {
    max-width: 150px;
  }
}
</style>
