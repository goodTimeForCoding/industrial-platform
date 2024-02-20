<template>
  <div class="footer-socials">
    <div class="left-col">
      <div class="social-item">
        <a href="https://linkedin.com/">
          <SvgoLnk class="social-img" :filled="true" alt="LinkedIn" />
        </a>
      </div>
      <div class="social-item">
        <a href="https://facebook.com/">
          <SvgoFb class="social-img" :filled="true" alt="Facebook" />
        </a>
      </div>
      <div v-if="!props.isTabletBreakpoint">
        <a href="https://habr.com/" class="social__link">
          <SvgoHabr class="social-img" :filled="true" alt="Habr" />
        </a>
      </div>
    </div>
    <div class="right-col">
      <div class="social-item">
        <a href="https://twitter.com/">
          <SvgoTw class="social-img" :filled="true" alt="Twitter" />
        </a>
      </div>
      <div class="social-item">
        <a href="https://www.instagram.com/">
          <SvgoInst class="social-img" :filled="true" alt="Instagram" />
        </a>
      </div>
      <div v-if="!props.isTabletBreakpoint" class="social-item">
        <a href="https://web.telegram.org/">
          <SvgoTg class="social-img" :filled="true" alt="Telegram" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isTabletBreakpoint: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.footer-socials {
  display: flex;
  gap: 20px;
  margin-top: 24px;
  margin-right: 120px;

  & .social-item {
    margin-bottom: 14px;
  }

  & .social-img {
    width: 22px;
    height: 22px;

    &:hover {
      fill: $christi;
    }
  }
}

@include tablet {

  .footer-socials {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    margin: 0 auto;
    column-gap: 10px;

    & .social-item {
      margin: 0;
    }

    & .left-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 10px;
    }

    & .right-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 10px;
    }
  }
}

@include bigmobile {

  .footer-socials {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 0;
    column-gap: 20px;

    & .left-col,
    & .right-col {
      column-gap: 20px;
    }
  }
}
</style>
