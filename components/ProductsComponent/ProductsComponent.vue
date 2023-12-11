<template>
  <div class="products">
    <div class="products-wrap">
      <h2 class="title container">{{ $t('products.title') }}</h2>
      <Swiper
        class="products-swiper"
        :modules="[SwiperPagination]"
        :slides-per-view="getSlidesPerView"
        :space-between="18"
        :pagination="{ clickable: true }"
        :centeredSlides="addCenteredSlides"
        :loop="true"
      >
        <SwiperSlide
          class="product-slide"
          v-for="product in productsStore.products"
          :key="product.id"
        >
          <div class="product-card">
            <div class="product-card-wrap">
              <h2 class="product-card-title">
                {{ product.name }}
              </h2>
              <p class="card-text">
                {{ product.description }}
              </p>
              <span v-if="product.tag" class="small-text">
                {{ product.tag.label }}
              </span>
              <div class="btn-wrap" v-if="product.knowMore">
                <NuxtLink class="link-btn" :to="`${product.knowMore}`"
                  >Узнать больше</NuxtLink
                >
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/store/ProductsStore.js';
import { useZyfraStore } from '@/store/ZyfraStore.js';
import { useI18n } from 'vue-i18n';

const productsStore = useProductsStore();
const zyfraStore = useZyfraStore();
const i18nLocale = useI18n();
const BIGDESKTOP_BREAKPOINT = 1920;
const MINITABLET_BREAKPOINT = 768;
const MIDDLEMOBILE_BREAKPOINT = 499;

const getSlidesPerView = computed(() => {
  if (zyfraStore.screenWidth >= BIGDESKTOP_BREAKPOINT) return 3;
  if (
    zyfraStore.screenWidth <= MINITABLET_BREAKPOINT &&
    zyfraStore.screenWidth > MIDDLEMOBILE_BREAKPOINT
  )
    return 1.99;
  if (zyfraStore.screenWidth <= MIDDLEMOBILE_BREAKPOINT) return 1.2;
  return 2.8;
});

const addCenteredSlides = computed(() => {
  if (zyfraStore.screenWidth <= MINITABLET_BREAKPOINT) return true;
  return false;
});

onMounted(() => {
  productsStore.getProducts(i18nLocale.locale.value);
});
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  padding-top: 42px;
  padding-bottom: 42px;
  background-color: $lightgrey;

  & .product-slide {
    cursor: pointer;
    height: auto;
    background-color: $white;
    border-radius: 4px;
    box-shadow: 4px 8px 26px 0 rgba(41, 8, 8, 0.1);
  }

  &::before {
    position: absolute;
    top: -39px;
    right: 0;
    z-index: 1;
    border-top: 64px solid $baltic;
    border-right: 0;
    border-bottom: 0;
    border-left: 100vw solid $lightgrey;
    content: '';
  }

  & .title {
    margin: 0;
    margin-bottom: 26px;
    color: $black;
    font-weight: 700;
    font-size: 22px;
  }

  & .product-card-wrap {
    display: flex;
    flex-direction: column;
    padding-top: 34px;
    padding-right: 40px;
    padding-bottom: 34px;
    padding-left: 40px;
  }

  & .product-card-title {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    color: $christi;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }

  & .card-text {
    margin: 0;
    margin-bottom: 43px;
    padding: 0;
    color: $black;
    line-height: 20px;
  }

  & .small-text {
    order: -1;
    margin-bottom: 12px;
    color: $dustygray;
    font-size: 12px;
    line-height: 20px;
  }

  & .swiper {
    padding-top: 26px;
    padding-bottom: 53px;
    padding-left: 30px;
  }

  & .link-btn {
    padding: 18px 35px;
    color: $white;
    font-weight: 700;
    font-size: 14px;
    font-style: normal;
    background: $christi;
    border-radius: 4px;
    box-shadow: 0 8px 26px 0 rgba(22, 44, 86, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background: $vida;
    }

    &:focus:not(:active) {
      background: $christi;
    }

    &:active {
      background: $sanfelix;
    }
  }
}

@include minidesk {
  .products {
    & .product-card-wrap {
      padding-top: 20px;
      padding-right: 20px;
      padding-bottom: 0px;
      padding-left: 20px;
    }
  }
}

@include minitablet {
  .products {
    & .swiper {
      padding-left: 0px;
    }

    & .product-card-wrap {
      padding-top: 25px;
      padding-right: 20px;
      padding-bottom: 30px;
      padding-left: 40px;
    }
  }
}

@include bigmobile {
  .products {
    &::before {
      border-top: 24px solid $baltic;
      top: 0px;
    }

    & .product-card-wrap {
      padding-top: 25px;
      padding-right: 20px;
      padding-bottom: 34px;
      padding-left: 20px;
    }
  }
}

@include bigdesktop {
  .products {
    & .products-wrap {
      max-width: 1920px;
      margin: 0 auto;
    }
  }
}
</style>
