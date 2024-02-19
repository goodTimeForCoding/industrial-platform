<template>
  <div class="support">
    <div class="new-clients">
      <h3 class="support-title">{{ title }}</h3>
      <p v-if="props.isTechnicalSupport" class="phone-text">
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
      <p v-if="props.isTechnicalSupport" class="phone-text">
        {{ $t('footer.mining') }}
      </p>
      <a
        v-if="props.isTechnicalSupport"
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
        v-if="!props.isTechnicalSupport"
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
    required: true,
  },
  text1: {
    type: String,
    default: '',
  },
  text2: {
    type: String,
    default: '',
  },
  isTechnicalSupport: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.support {
  margin-right: 50px;
  max-width: 220px;

  & .support-title {
    margin: 0;
    margin-bottom: 9px;
    padding: 0;
    color: $black;
    font-weight: 600;
    font-size: 14px;
  }

  & .header-contact-link {
    position: relative;
    margin-right: 26px;
    color: $thunder;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;

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
    padding: 0;
    margin-top: 7px;
    margin-bottom: 3px;
    font-size: 12px;
  }
}

@include bigmobile {
  .support {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
