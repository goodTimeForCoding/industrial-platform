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
    <div class="header-item-wrap">
      <div
        :class="['header-item', isHeaderItemActive(menu)]"
        v-for="menu in headerItems"
        :key="menu.id"
        @mouseover="openMenuList(menu)"
        @mouseleave="closeMenuList(menu)"
        @click="openCloseMenuList(menu)"
      >
        {{ $t(menu.name) }}
        <div class="arrow-img-wrap">
          <SvgoArrowBottom
            :class="['arrow-img', arrowRotate(menu)]"
            :filled="true"
          />
        </div>
        <transition name="slide-fade">
          <NavLinksComponent
            v-if="menu.isHover"
            class="menu-item-link"
            :menuLinks="menu.links"
          />
        </transition>
      </div>
    </div>

    <div class="header-contacts">
      <a class="header-contact-link email-link" href="mailto:hello@zyfra.com">
        <div class="contact-wrapper">
          <div class="icon-wrap">
            <SvgoIconEmail class="email-icon" />
          </div>
          <span class="email"> hello@zyfra.com </span>
        </div>
      </a>
      <a class="header-contact-link phone-link" href="tel:+358942725025">
        <div class="contact-wrapper">
          <div class="icon-wrap">
            <SvgoIconPhone class="phone-icon" :filled="true" />
          </div>
          <span class="phone"> +358 942 72 50 25 </span>
        </div>
      </a>
    </div>

    <div class="language-wrap">
      <LangSwitcher class="lang-switcher-header" />
    </div>

    <div class="btn-wrap">
      <ButtonComponent>{{ $t('headerNav.btnText') }}</ButtonComponent>
    </div>
  </nav>
</template>

<script setup>
import ButtonComponent from '@/components/ButttonComponent/ButttonComponent.vue';
import LangSwitcher from '@/components/LangSwitcher/LangSwitcher.vue';
import NavLinksComponent from '@/components/NavLinksComponent/NavLinksComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore.js';

const localePath = useLocalePath();
const zyfraStore = useZyfraStore();
const TABLET_BREAKPOINT = 1179;
const headerItems = reactive([
  {
    name: 'headerNav.about',
    isHover: false,
    id: 1,
    links: [
      {
        name: 'aboutLinks.about',
        path: 'https://www.zyfra.com/ru/about/',
      },
      { name: 'aboutLinks.partners', path: 'https://partners.zyfra.com/' },
      { name: 'aboutLinks.import', path: 'https://local.zyfra.com/' },
      {
        name: 'aboutLinks.customer',
        path: 'https://www.zyfra.com/ru/about/feedback/',
      },
      { name: 'aboutLinks.career', path: 'https://www.zyfra.com/ru/about/hr/' },
      {
        name: 'aboutLinks.environmental',
        path: 'https://www.zyfra.com/ru/about/sustainability/',
      },
      { name: 'aboutLinks.digital', path: 'https://asia.zyfra.com/' },
    ],
  },
  {
    name: 'headerNav.product',
    isHover: false,
    id: 2,
    links: [
      {
        name: 'productLinks.dispatcher',
        path: 'https://www.zyfra.com/ru/product/dispatcher/',
      },
      {
        name: 'Zyfra IIoT Platform',
        path: 'https://www.zyfra.com/ru/product/industrial-iot-platform/',
      },
      {
        name: 'Zyfra Industrial Automation Kit',
        path: 'https://www.zyfra.com/ru/product/industrial-automation-kit/',
      },
      {
        name: 'productLinks.acs',
        path: 'https://www.zyfra.com/ru/product/openmine/',
      },
      {
        name: 'VG Underground',
        path: 'https://www.zyfra.com/ru/product/underground/',
      },
      {
        name: 'Zyfra RoboDrill',
        path: 'https://www.zyfra.com/ru/product/robodrill/',
      },
      {
        name: 'Zyfra RoboTruck',
        path: 'https://www.zyfra.com/ru/product/robotruck/',
      },
      {
        name: 'productLinks.geonaft',
        path: 'https://www.zyfra.com/ru/product/heat-treatment/',
      },
      {
        name: 'VG Work&Safety Management',
        path: 'https://www.zyfra.com/ru/product/safety/',
      },
    ],
  },
  {
    name: 'headerNav.media',
    isHover: false,
    id: 3,
    links: [
      {
        name: 'mediaLinks.news',
        path: 'https://www.zyfra.com/ru/news/media/',
      },
      {
        name: 'mediaLinks.pressKit',
        path: 'https://www.zyfra.com/ru/presskit/',
      },
      {
        name: 'mediaLinks.educational',
        path: 'https://www.zyfra.com/ru/news/webinars/',
      },
      {
        name: 'mediaLinks.podcasts',
        path: 'https://www.zyfra.com/ru/news/podcasts/',
      },
    ],
  },
  {
    name: 'headerNav.industry',
    isHover: false,
    id: 4,
    links: [
      {
        name: 'industryLinks.industrial',
        path: 'https://idp.zyfra.com/',
      },
      {
        name: 'industryLinks.mining',
        path: 'https://www.zyfra.com/ru/industries/mining/',
      },
      {
        name: 'industryLinks.metalworking',
        path: 'https://www.zyfra.com/ru/industries/metalworking/',
      },
      {
        name: 'industryLinks.oil',
        path: 'https://www.zyfra.com/ru/industries/upstream/',
      },
      {
        name: 'industryLinks.production',
        path: 'https://www.zyfra.com/ru/industries/process-industries/',
      },
      {
        name: 'industryLinks.ai',
        path: 'https://www.zyfra.com/ru/industries/industrial-artificial-intelligence-lab/',
      },
      {
        name: 'industryLinks.technology',
        path: 'https://www.zyfra.com/ru/industries/robotics/',
      },
    ],
  },
]);

const isNavClosed = ref(true);
const isNavOpened = ref(false);

const isHeaderItemActive = menuItem => {
  if (menuItem.isHover) return 'header-item--active';
  return '';
};

const arrowRotate = menuItem => {
  if (menuItem.isHover) return 'arrow-img--rotate';
  return '';
};

const changeNav = () => {
  isNavClosed.value = !isNavClosed.value;
  isNavOpened.value = !isNavOpened.value;
};

const openMenuList = menu => {
  if (zyfraStore.screenWidth > TABLET_BREAKPOINT) {
    menu.isHover = true;
  }
};

const closeMenuList = menu => {
  if (zyfraStore.screenWidth > TABLET_BREAKPOINT) {
    menu.isHover = false;
  }
};

const openCloseMenuList = menu => {
  if (zyfraStore.screenWidth <= TABLET_BREAKPOINT) {
    menu.isHover = !menu.isHover;
  }
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

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

  & .arrow-img-wrap {
    display: none;
  }

  & .header-item-wrap {
    display: flex;
  }

  & .header-item {
    position: relative;
    margin-right: 67px;
    padding-top: 40px;
    padding-bottom: 40px;
    cursor: pointer;
    transition: color 0.3s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &--active::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 8px;
      background: $christi;
      content: '';
    }

    &--active {
      color: $christi;
    }
  }

  & .header-contacts {
    display: flex;
    align-items: center;
    margin-right: 18px;
    margin-left: auto;
  }

  & .header-contact-link {
    position: relative;
    margin-right: 26px;
    color: $white;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      color: $christi;
    }
  }

  & .menu-item-link {
    position: absolute;
    top: 70px;
    z-index: 3;
  }

  & .contact-wrapper {
    display: flex;
    align-items: flex-end;
  }

  & .email-icon {
    width: 20px;
    height: 12px;
    margin-right: 9px;
  }

  & .phone-icon {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    stroke: $white;
  }

  & .phone-link {
    transition: 0.1s;

    &:hover .phone-icon {
      stroke: $christi;
    }
  }

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

@include minidesk {
  .header-nav {
    & .email,
    & .phone {
      display: none;
    }

    & .header-item {
      margin-right: 60px;
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

    &--opened .header-item {
      position: relative;
      display: block;
      margin: 0;
      margin-right: 0;
      padding-top: 15px;
      padding-bottom: 15px;
      font-weight: 700;
      font-size: 22px;
    }

    & .header-item--active::before {
      content: none;
    }

    &--opened .header-item-wrap {
      display: block;
      order: 3;
      padding: 0 25px;
      animation-name: open-menu;
      animation-duration: 0.5s;
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

    &--opened .header-contacts,
    &--opened .language-wrap,
    &--opened .btn-wrap {
      animation-name: open-menu;
      animation-duration: 0.5s;
    }

    & .header-contacts {
      flex-direction: column;
      gap: 36px;
      align-self: start;
      order: 5;
      margin: 0;
      padding: 0 31px;
    }

    & .email,
    & .phone {
      display: block;
    }

    & .email-link {
      order: 2;
    }

    & .menu-item-link {
      position: static;
      width: 285px;
      padding: 15px 25px 0;
    }

    & .arrow-img-wrap {
      display: inline-block;
      margin-left: 14px;
    }

    & .arrow-img {
      stroke: $christi;
    }

    & .arrow-img--rotate {
      transform: rotate(180deg);
    }

    &--closed .header-item,
    &--closed .header-contacts,
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
