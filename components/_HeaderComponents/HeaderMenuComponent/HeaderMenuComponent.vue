<template>
  <div :class="['header-menu', addOpenCloseClass]">
    <div
      v-for="menu in headerItems"
      :key="menu.id"
      :class="['header-item', isHeaderItemActive(menu)]"
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
          :menu-links="menu.links"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import NavLinksComponent from '@/components/_HeaderComponents/NavLinksComponent/NavLinksComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore';

const props = defineProps({
  isLinksOpen: {
    type: Boolean,
  },
  isLinksClose: {
    type: Boolean,
  },
});

const TABLET_BREAKPOINT = 1179;
const zyfraStore = useZyfraStore();

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

const isHeaderItemActive = menuItem => {
  if (menuItem.isHover) return 'header-item--active';
  return '';
};

/* eslint-disable no-param-reassign */
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
/* eslint-enable no-param-reassign */

const arrowRotate = menuItem => {
  if (menuItem.isHover) return 'arrow-img--rotate';
  return '';
};

const addOpenCloseClass = computed(() => {
  if (props.isLinksClose) return 'header-menu--closed';
  if (props.isLinksOpen) return 'header-menu--opened';
  return false;
});
</script>

<style lang="scss" scoped>
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

.header-menu {
  display: flex;

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

  & .arrow-img-wrap {
    display: none;
  }

  & .menu-item-link {
    position: absolute;
    top: 70px;
    z-index: 3;
  }
}

@include minidesk {
  .header-menu {
    & .header-item {
      margin-right: 60px;
    }
  }
}

@include tablet {
  .header-menu {
    &--opened {
      display: block;
      order: 3;
      padding: 0 25px;
      animation-name: open-menu;
      animation-duration: 0.5s;
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

    &--closed .header-item {
      display: none;
    }

    & .header-item--active::before {
      content: none;
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

    & .menu-item-link {
      position: static;
      width: 285px;
      padding: 15px 25px 0;
    }
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
