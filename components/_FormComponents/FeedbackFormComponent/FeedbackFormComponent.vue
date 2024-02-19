<template>
  <div class="feedback container">
    <div class="feedback-wrap">
      <div class="feedback-description-wrap">
        <FeedbackFormDescription />
      </div>
      <div class="feedback-form-wrap">
        <FeedbackForm :is-modal="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FeedbackFormDescription from '@/components/_FormComponents/FeedbackFormDescription/FeedbackFormDescription.vue';
import FeedbackForm from '@/components/_FormComponents/FeedbackForm/FeedbackForm.vue';
</script>

<style lang="scss" scoped>
.feedback {
  background-color: $lightgrey;

  .feedback-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-top: 107px;
    justify-content: center;

    .feedback-description-wrap {
      max-width: 370px;
    }

    .feedback-form-wrap {
      max-width: 671px;
      padding-bottom: 57px;
    }
  }
}

@include tablet {
  .feedback {
    .feedback-wrap {
      display: flex;
      flex-direction: column;
      gap: 43px;
      max-width: 671px;
      margin: 0 auto;
    }
  }
}

@include mobile {
  .feedback {
    .feedback-wrap {
      display: block;

      .feedback-description-wrap {
        margin-bottom: 60px;
      }
    }
  }
}
</style>
