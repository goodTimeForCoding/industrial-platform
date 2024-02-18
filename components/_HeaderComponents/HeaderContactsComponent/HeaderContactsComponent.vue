<template>
  <div class="header-contacts">
    <a class="header-contact-link email-link" href="mailto:hello@zyfra.com">
      <div class="contact-wrapper">
        <div class="icon-wrap">
          <SvgoIconEmail class="email-icon" />
        </div>
        <span class="email"> hello@zyfra.com </span>
      </div>
    </a>
    <a class="header-contact-link phone-link" href="tel:+358942725025">
      <div class="contact-wrapper">
        <div class="icon-wrap">
          <SvgoIconPhone class="phone-icon" :filled="true" />
        </div>
        <span class="phone"> +358 942 72 50 25 </span>
      </div>
    </a>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header-contacts {
  display: flex;
  align-items: center;
  margin-right: 18px;
  margin-left: auto;

  & .contact-wrapper {
    display: flex;
    align-items: flex-end;
  }

  & .header-contact-link {
    position: relative;
    margin-right: 26px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;
    color: $white;

    &:hover {
      color: $christi;
    }
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
    stroke: $white;
  }

  & .phone-link {
    transition: 0.1s;

    &:hover .phone-icon {
      stroke: $christi;
    }
  }
}

@include minidesk {

  .header-contacts {

    & .email,
    & .phone {
      display: none;
    }
  }
}

@include tablet {

  .header-contacts {
    order: 5;
    flex-direction: column;
    margin: 0;
    padding: 0 31px;
    gap: 36px;
    align-self: start;

    & .email,
    & .phone {
      display: block;
    }

    & .email-link {
      order: 2;
    }
  }
}
</style>
