<template>
  <div class="education">
    <div class="education-bg container">
      <div class="education-wrap">
        <h2 class="education-title">{{ $t('education.title') }}</h2>
        <p class="text text-top">
          {{ $t('education.textTop') }}
        </p>
        <p class="text text-bottom">
          {{ $t('education.textBottom') }}
        </p>
        <div class="btn-wrap">
          <ButtonComponent @click="modalStore.openModal">{{
            $t('education.btnText')
          }}</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/_UI/ButtonComponent/ButtonComponent.vue';
import { useModalStore } from '@/store/ModalStore.js';

const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
.education {
  margin-bottom: 91px;
  position: relative;

  &::after {
    position: absolute;
    bottom: -150px;
    right: 0;
    z-index: 1;
    border-top: 64px solid $baltic;
    border-right: 0;
    border-bottom: 0;
    border-left: 100vw solid $lightgrey;
    content: '';
  }

  & .education-bg {
    padding-top: 66px;
    padding-bottom: 60px;
    background-image: url('/bg-img/edu-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
  }

  & .education-title {
    margin: 0;
    margin-bottom: 23px;
    padding: 0;
    font-weight: 700;
    font-size: 22px;
  }

  & .text {
    margin: 0;
    padding: 0;
    max-width: 808px;
  }

  & .text-top {
    margin-bottom: 30px;
  }

  & .text-bottom {
    margin-bottom: 23px;
  }
}

@include bigmobile {
  .education {
    &::after {
      border-top: 24px solid $baltic;
      bottom: -115px;
    }
  }
}

@include bigdesktop {
  .education-wrap {
    margin: 0 auto;
    max-width: 800px;
  }
}
</style>
