// согласно доки первый идет скрипт, потом темплейт и потом стили
<template>
  <div class="advantage container">
    <h2 class="advanatge-title">
      {{ $t('advantage.title') }}
    </h2>
    <p class="advantage-text">
      {{ $t('advantage.text') }}
    </p>

    <div class="advantage-wrap" v-if="isTabletBreakpoint">
      <Swiper
        class="advantage-swiper"
        :modules="[SwiperPagination]"
        :slides-per-view="addPerViewCount"
        :space-between="30"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="card in advantagesData" :key="card.id">
          <div :class="['advantage-card', card.bgClass]">
            <div class="advantage-card-wrap">
              <p class="card-text">
                {{ $t(card.advantage) }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="advantage-wrap" v-else>
      <div class="advantage-cards">
        <div
          :class="['advantage-card', card.bgClass]"
          v-for="card in advantagesData"
          :key="card.id"
        >
          <div class="advantage-card-wrap">
            <p class="card-text">
              {{ $t(card.advantage) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
// https://nuxt.com/modules/nuxt-viewport#default-configuration
// есть вот такой модуль, он позволит избавиться от этих переменных
const MINITABLET_BREAKPOINT = 768;
const BIGMOBILE_BREAKPOINT = 700;
const MIDDLEMOBILE_BREAKPOINT = 499;
const zyfraStore = useZyfraStore();

const advantagesData = reactive([
  {
    id: 1,
    advantage: 'advantage.factoryCard',
    bgClass: 'factory',
  },
  {
    id: 2,
    advantage: 'advantage.architectureCard',
    bgClass: 'architecture',
  },
  {
    id: 3,
    advantage: 'advantage.directyCard',
    bgClass: 'direct',
  },
]);

const addPerViewCount = computed(() => {
  if (zyfraStore.screenWidth <= MIDDLEMOBILE_BREAKPOINT) return 1.15;
  if (zyfraStore.screenWidth <= BIGMOBILE_BREAKPOINT) return 1.5;
  return 2.5;
});

const isTabletBreakpoint = computed(() => {
  if (zyfraStore.screenWidth <= MINITABLET_BREAKPOINT) return true;
  return false;
});
</script>

<style lang="scss" scoped>
.advantage {
  position: relative;
  top: -58px;
  display: flex;
  flex-direction: column;
  padding-top: 98px;
  background-color: $lightgrey;

  &::before {
    position: absolute;
    top: -43px;
    right: 0;
    z-index: 1;
    border-top: 64px solid $baltic;
    border-right: 0;
    border-bottom: 0;
    border-left: 100vw solid $lightgrey;
    content: '';
  }

  & .advantage-text {
    order: -1;
    // для этого есть шорткады - margin: 0 0 30px;
    margin: 0;
    margin-bottom: 30px;
    padding: 0;
    color: $baltic;
    line-height: 20px;
    max-width: 968px;
  }

  & .advanatge-title {
    margin: 0;
    margin-bottom: 50px;
    padding: 0;
    color: $black;
    font-weight: 700;
    font-size: 22px;
  }

  & .advantage-cards {
    display: flex;
    gap: 30px;
    padding-bottom: 50px;
    justify-content: space-between;
  }

  & .advantage-card {
    width: 340px;
    height: 396px;
    background-color: $white;
    border-radius: 4px;
    box-shadow: 0 8px 26px 0 rgba(22, 44, 86, 0.1);
  }

  & .card-text {
    margin: 0;
    padding: 0;
    padding-top: 122px;
    padding-right: 34px;
    padding-left: 34px;
    color: $black;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
  }

  & .factory {
    background-image: url('/arrow-right.svg'), url('/arrow-left.svg'),
      url('/arrow-turn-top.svg'), url('/factory.png');
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top 63px right 31px, bottom 60px right 31px,
      bottom 60px left 37px, top 38px left 34px;
  }

  & .architecture {
    background-image: url('/arrow-right.svg'), url('/arrow-left.svg'),
      url('/gears.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 63px right 31px, bottom 60px right 31px,
      top 28px left 30px;
  }

  & .direct {
    background-image: url('/arrow-turn-bottom.svg'), url('/arrow-left.svg'),
      url('/challenges.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 63px right 28px, bottom 60px right 31px,
      top 38px left 34px;
  }
}

@include minidesk {
  .advantage {
    top: 0px;
    padding-top: 50px;

    & .advantage-cards {
      padding-bottom: 100px;
    }

    &::before {
      top: -31px;
    }

    & .card-text {
      padding-top: 118px;
      padding-right: 32px;
      padding-left: 35px;
      text-transform: none;
    }

    & .advantage-cards {
      gap: 15px;
    }
  }
}

@include tablet {
  .advantage {
    &::before {
      top: -50px;
    }

    & .card-text {
      padding-top: 110px;
      padding-right: 29px;
      padding-left: 41px;
      text-transform: uppercase;
    }

    & .advantage-card {
      width: 270px;
      height: 342px;
    }

    & .advantage-text {
      margin-bottom: 50px;
    }

    & .advanatge-title {
      margin-bottom: 30px;
    }
  }
}

@include minitablet {
  .advantage {
    & .advantage-wrap {
      padding-left: 50px;
      padding-bottom: 69px;
    }

    & .swiper {
      padding-bottom: 63px;
    }

    &.container {
      padding: 0;
      padding-top: 42px;
    }

    & .card-text {
      padding-top: 124px;
    }

    & .advanatge-title {
      max-width: 570px;
      padding: 0 50px;
    }

    & .advantage-text {
      padding: 0 50px;
    }
  }
}

@include bigmobile {
  .advantage {
    &::before {
      top: -16px;
      border-top: 24px solid $baltic;
    }

    & .advantage-wrap {
      padding-left: 25px;
    }

    & .advantage-text {
      padding: 0 25px;
    }

    & .advanatge-title {
      padding: 0 25px;
    }

    & .advantage-card {
      width: 330px;
      height: 350px;
    }
  }
}

@include middlemobile {
  .advantage {
    & .advantage-card {
      width: 270px;
      height: 342px;
    }

    & .advantage-wrap {
      padding-left: 50px;
    }
  }
}

@include mobile {
  .advantage {
    & .advantage-wrap {
      padding-left: 25px;
    }
  }
}

@include bigdesktop {
  .advantage {
    align-items: center;
  }
}
</style>
