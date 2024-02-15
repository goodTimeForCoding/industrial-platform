<template>
  <nav :class="['header-nav container', addNavOpenCloseClass]">
    <div class="nav-wrap">
      <button
        class="button header-nav-toggle"
        @click="changeNav()"
        type="button"
      >
        <span class="visually-hidden">{{ $t('headerNav.openMenu') }}</span>
      </button>

      <NuxtLink
        v-if="isTabletBreakpoint"
        class="logo-link"
        :to="localePath('/industries/dip')"
      >
        <img
          class="logo-img"
          :src="$t('headerNav.icon')"
          width="118"
          height="41"
          :alt="$t('headerNav.iconAlt')"
        />
      </NuxtLink>
    </div>

    <HeaderMenuComponent
      :isLinksOpen="isNavOpened"
      :isLinksClose="isNavClosed"
    />

    <HeaderContactsComponent class="header-contacts-wrap" />

    <div class="language-wrap">
      <LangSwitcher class="lang-switcher-header" />
    </div>

    <div class="btn-wrap">
      <ButtonComponent>{{ $t('headerNav.btnText') }}</ButtonComponent>
    </div>
  </nav>
</template>

<script setup>
import ButtonComponent from '@/components/_UI/ButtonComponent/ButtonComponent.vue';
import LangSwitcher from '@/components/LangSwitcher/LangSwitcher.vue';
import HeaderMenuComponent from '@/components/_HeaderComponents/HeaderMenuComponent/HeaderMenuComponent.vue';
import HeaderContactsComponent from '@/components/_HeaderComponents/HeaderContactsComponent/HeaderContactsComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore.js';

const localePath = useLocalePath();
const zyfraStore = useZyfraStore();
const TABLET_BREAKPOINT = 1179;

const isNavClosed = ref(true);
const isNavOpened = ref(false);

const changeNav = () => {
  isNavClosed.value = !isNavClosed.value;
  isNavOpened.value = !isNavOpened.value;
};

const isTabletBreakpoint = computed(() => {
  return zyfraStore.screenWidth < TABLET_BREAKPOINT;
});

const addNavOpenCloseClass = computed(() => {
  if (isNavClosed.value) return 'header-nav--closed';
  if (isNavOpened.value) return 'header-nav--opened';
});
</script>

<style scoped lang="scss">
.header-nav {
  position: relative;
  background-color: $baltic;
  z-index: 10;
  display: flex;
  flex-grow: 1;
  color: $white;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  & .language-wrap {
    align-self: center;
    transition: display;
  }

  & .btn-wrap {
    display: none;
  }

  &-toggle {
    position: relative;
    display: none;
    align-self: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &-toggle::before {
    position: absolute;
    top: 12px;
    left: 5px;
    width: 30px;
    height: 3px;
    background-color: $christi;
    border-radius: 2px;
    box-shadow: 0 8px 0 0 $christi, 0 16px 0 0 $christi;
    content: '';
  }

  &--opened &-toggle {
    &::before,
    &::after {
      position: absolute;
      top: 19px;
      left: 5px;
      width: 30px;
      height: 3px;
      background-color: $christi;
      border-radius: 2px;
      content: '';
    }

    &::before {
      box-shadow: none;
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}

@include tablet {
  .header-nav {
    display: flex;
    flex-direction: column;

    &--opened {
      padding-bottom: 63px;
    }

    &-toggle {
      display: block;
    }

    & .logo-img {
      width: 107px;
    }

    & .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-top: 25px;
      padding-bottom: 25px;
    }

    & .language-wrap {
      align-self: self-start;
      margin-bottom: 21px;
      padding: 0 31px;
    }

    & .language-item {
      &:hover {
        color: $christi;
      }
    }

    &--opened .btn-wrap {
      display: block;
      order: 4;
      margin-top: 64px;
      margin-bottom: 58px;
      padding: 0 31px;
      animation-name: open-menu;
      animation-duration: 0.5s;
    }

    &--opened .header-contacts-wrap,
    &--opened .language-wrap,
    &--opened .btn-wrap {
      animation-name: open-menu;
      animation-duration: 0.5s;
    }

    &--closed .header-contacts-wrap,
    &--closed .language-wrap {
      display: none;
    }
  }
}

@include mobile {
  .header-nav {
    &--opened .btn-wrap {
      margin-bottom: 58px;
    }

    & .nav-wrap {
      padding-top: 25px;
      padding-bottom: 16px;
    }

    &--opened .nav-wrap {
      padding-top: 11px;
      padding-bottom: 32px;
    }
  }
}

@include bigdesktop {
  .header-nav {
    max-width: 1920px;
  }
}

@keyframes open-menu {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
