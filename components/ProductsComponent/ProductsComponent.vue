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
              <h3 class="product-card-title">
                {{ product.name }}
              </h3>
              <p class="card-text">
                {{ product.description }}
              </p>
              <span v-if="product.tag" class="small-text">
                {{ product.tag.label }}
              </span>
              <div v-if="product.knowMore" class="btn-wrap">
                <NuxtLink class="link-btn" :to="`${product.knowMore}`">
                  Узнать больше
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useProductsStore } from '@/store/ProductsStore.js';
import { useZyfraStore } from '@/store/ZyfraStore.js';

const productsStore = useProductsStore();
const zyfraStore = useZyfraStore();
const i18nLocale = useI18n();
const BIGDESKTOP_BREAKPOINT = 1920;
const MINITABLET_BREAKPOINT = 768;
const MIDDLEMOBILE_BREAKPOINT = 424;

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

const addCenteredSlides = computed(
  () => zyfraStore.screenWidth <= MINITABLET_BREAKPOINT
);

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
    height: auto;
    border-radius: 4px;
    background-color: $white;
    box-shadow: 4px 8px 26px 0 rgb(41 8 8 / 10%);
    cursor: pointer;
  }

  &::before {
    z-index: 1;
    position: absolute;
    top: -39px;
    right: 0;
    border-top: 64px solid $baltic;
    border-right: 0;
    border-bottom: 0;
    border-left: 100vw solid $lightgrey;
    content: '';
  }

  & .title {
    margin: 0;
    margin-bottom: 26px;
    font-size: 22px;
    font-weight: 700;
    color: $black;
  }

  & .product-card-wrap {
    display: flex;
    flex-direction: column;
    padding: 34px 40px;
  }

  & .product-card-title {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: $christi;
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
    border-radius: 4px;
    background: $christi;
    box-shadow: 0 8px 26px 0 rgb(22 44 86 / 10%);
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: $white;

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
      padding: 20px 20px 0;
    }
  }
}

@include minitablet {

  .products {

    & .swiper {
      padding-left: 0;
    }

    & .product-card-wrap {
      padding: 25px 20px 30px 40px;
    }
  }
}

@include bigmobile {

  .products {

    &::before {
      top: 0;
      border-top: 24px solid $baltic;
    }

    & .product-card-wrap {
      padding: 25px 20px 34px;
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
