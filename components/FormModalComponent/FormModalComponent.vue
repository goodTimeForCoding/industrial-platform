<template>
  <div class="form-modal" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div class="modal-overlay" @click.self="modalStore.closeModal">
      <div class="modal">
        <h2 class="modal-title">
          {{ $t('modal.title') }}
        </h2>
        <FeedbackForm :isModal="true" />
        <div class="close">
          <img
            class="close-img"
            src="/support-icons/close.svg"
            alt=""
            @click.self="modalStore.closeModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FeedbackForm from '@/components/_FormComponents/FeedbackForm/FeedbackForm.vue';
import { useModalStore } from '@/store/ModalStore.js';

const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
.form-modal {

  & .modal-overlay {
    z-index: 20;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    background-color: $lightblack;
  }

  & .modal {
    position: relative;
    width: 707px;
    height: 654px;
    margin-top: 10px;
    padding: 66px 112px 40px;
    background-color: $white;
  }

  & .close {
    position: absolute;
    top: 32px;
    right: 66px;
    bottom: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
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
      width: 543px;
      height: 577px;
      padding: 20px 30px;
    }
  }
}

@include minitablet {

  .form-modal {

    & .modal {
      height: 640px;
    }

    & .modal-title {
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
}

@include bigmobile {

  .form-modal {

    & .modal {
      width: 300px;
      height: 640px;
      margin: 0;
      margin-top: 10px;
      padding: 10px;
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
