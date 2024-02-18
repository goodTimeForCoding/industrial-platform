<template>
  <div class="support">
    <div class="new-clients">
      <h3 class="support-title">{{ title }}</h3>
      <p v-if="isTechnicalSupport" class="phone-text">
        {{ $t('footer.monitoring') }}
      </p>
      <a class="header-contact-link phone-link" href="tel:+358942725025">
        <div class="contact-wrapper">
          <div class="icon-wrap">
            <SvgoIconPhone class="phone-icon" :filled="true" />
          </div>
          <span class="phone"> +358 942 72 50 25 </span>
        </div>
      </a>
      <p v-if="isTechnicalSupport" class="phone-text">
        {{ $t('footer.mining') }}
      </p>
      <a
        v-if="isTechnicalSupport"
        class="header-contact-link phone-link"
        href="tel:+358942725025"
      >
        <div class="contact-wrapper">
          <div class="icon-wrap">
            <SvgoIconPhone class="phone-icon" :filled="true" />
          </div>
          <span class="phone"> +358 942 72 50 25 </span>
        </div>
      </a>
      <a
        v-if="!isTechnicalSupport"
        class="header-contact-link email-link"
        href="mailto:hello@zyfra.com"
      >
        <div class="contact-wrapper">
          <div class="icon-wrap">
            <SvgoIconEmail class="email-icon" />
          </div>
          <span class="email"> hello@zyfra.com </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  text1: {
    type: String,
  },
  text2: {
    type: String,
  },
  isTechnicalSupport: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.support {
  max-width: 220px;
  margin-right: 50px;

  & .support-title {
    margin: 0;
    margin-bottom: 9px;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    color: $black;
  }

  & .header-contact-link {
    position: relative;
    margin-right: 26px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;
    color: $thunder;

    &:hover {
      color: $christi;
    }
  }

  & .contact-wrapper {
    display: flex;
    align-items: flex-end;
    font-size: 12px;
  }

  & .email-icon {
    width: 20px;
    height: 12px;
    margin-right: 9px;
  }

  & .phone-icon {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    stroke: $thunder;
  }

  & .phone-link {
    transition: 0.1s;

    &:hover .phone-icon {
      stroke: $christi;
    }
  }

  & .phone-text {
    margin: 0;
    margin-top: 7px;
    margin-bottom: 3px;
    padding: 0;
    font-size: 12px;
  }
}

@include bigmobile {

  .support {
    grid-column: 1 / 3;
  }
}
</style>
