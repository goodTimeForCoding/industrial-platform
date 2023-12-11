<template>
  <div class="feedback-wrap">
    <div class="feedback-description-wrap">
      <FeedbackFormDescription />
    </div>
    <div class="feedback-form-wrap">
      <FeedbackForm :isModal="false" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
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

@include tablet {
  .feedback-wrap {
    display: flex;
    flex-direction: column;
    gap: 43px;
    max-width: 671px;
    margin: 0 auto;
  }
}

@include mobile {
  .feedback-wrap {
    display: block;

    .feedback-description-wrap {
      margin-bottom: 60px;
    }
  }
}
</style>
