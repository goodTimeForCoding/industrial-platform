<template>
  <div class="form-modal" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div class="modal-overlay" @click="zyfraStore.closeModal">
      <div class="modal" @click.stop>
        <h2 class="modal-title">
          {{ $t('modal.title') }}
        </h2>
        <FeedbackForm :isModal="true" />
        <div class="close" @click="zyfraStore.closeModal">
          <img class="close-img" src="/close.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
const zyfraStore = useZyfraStore();
</script>

<style lang="scss" scoped>
.form-modal {
  & .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 20;
    background-color: $lightblack;
  }

  & .modal {
    position: relative;
    background-color: $white;
    width: 707px;
    height: 654px;
    margin-top: 10px;
    padding: 66px 112px 40px;
  }

  & .close {
    position: absolute;
    cursor: pointer;
    top: 32px;
    bottom: 0;
    right: 66px;
  }

  & .modal-title {
    text-align: center;
    margin: 0;
    margin-bottom: 59px;
    font-size: 22px;
    font-weight: 700;
    color: $black;
  }
}

@include tablet {
  .form-modal {
    & .modal {
      padding: 20px 30px 20px;
      width: 543px;
      height: 577px;
    }
  }
}

@include bigmobile {
  .form-modal {
    & .modal {
      margin: 0;
      margin-top: 10px;
      padding: 10px 10px;
      width: 300px;
      height: 623px;
    }

    & .modal-title {
      margin: 0;
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: 700;
      color: $black;
    }

    & .close {
      top: 15px;
      right: 15px;
    }
  }
}
</style>
