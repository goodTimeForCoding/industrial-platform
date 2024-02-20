<template>
  <div class="advantage container">
    <h2 class="advanatge-title">
      {{ $t('advantage.title') }}
    </h2>
    <p class="advantage-text">
      {{ $t('advantage.text') }}
    </p>

    <div v-if="isTabletBreakpoint" class="advantage-wrap">
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

    <div v-else class="advantage-wrap">
      <div class="advantage-cards">
        <div
          v-for="card in advantagesData"
          :key="card.id"
          :class="['advantage-card', card.bgClass]"
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
import { useZyfraStore } from '@/store/ZyfraStore';

const MINITABLET_BREAKPOINT = 768;
const BIGMOBILE_BREAKPOINT = 699;
const MIDDLEMOBILE_BREAKPOINT = 424;
const zyfraStore = useZyfraStore();

const advantagesData = [
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
];

const addPerViewCount = computed(() => {
  if (zyfraStore.screenWidth <= MIDDLEMOBILE_BREAKPOINT) return 1.15;
  if (zyfraStore.screenWidth <= BIGMOBILE_BREAKPOINT) return 1.5;
  return 2.5;
});

const isTabletBreakpoint = computed(() => {
  return zyfraStore.screenWidth <= MINITABLET_BREAKPOINT;
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
    max-width: 968px;
    margin: 0;
    margin-bottom: 30px;
    padding: 0;
    color: $baltic;
    line-height: 20px;
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
    justify-content: space-between;
    padding-bottom: 50px;
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
    background-image: url('/bg-img/arrow-right.svg'),
      url('/bg-img/arrow-left.svg'), url('/bg-img/arrow-turn-top.svg'),
      url('/bg-img/factory.png');
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position:
      top 63px right 31px,
      bottom 60px right 31px,
      bottom 60px left 37px,
      top 38px left 34px;
  }

  & .architecture {
    background-image: url('/bg-img/arrow-right.svg'),
      url('/bg-img/arrow-left.svg'), url('/bg-img/gears.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      top 63px right 31px,
      bottom 60px right 31px,
      top 28px left 30px;
  }

  & .direct {
    background-image: url('/bg-img/arrow-turn-bottom.svg'),
      url('/bg-img/arrow-left.svg'), url('/bg-img/challenges.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      top 63px right 28px,
      bottom 60px right 31px,
      top 38px left 34px;
  }
}

@include minidesk {

  .advantage {
    top: 0;
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
      padding-bottom: 69px;
      padding-left: 50px;
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
      width: 277px;
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
