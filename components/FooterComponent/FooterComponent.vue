<template>
  <div class="footer">
    <div class="col">
      <NuxtLink
        v-if="!isTabletBreakpoint"
        class="logo-link"
        :to="localePath('/industries/dip')"
      >
        <div class="logo-text">Zyfra</div>
      </NuxtLink>

      <NuxtLink v-else class="logo-link" :to="localePath('/industries/dip')">
        <img
          class="logo-img"
          :src="$t('footer.icon')"
          width="118"
          height="41"
          alt="логотип компании"
        />
      </NuxtLink>

      <div class="language-wrap">
        <LangSwitcher class="lang-switcher-footer" />
      </div>

      <div class="footer-socials socials">
        <div class="left-col">
          <div class="social-item">
            <a href="https://linkedin.com/" class="social-link">
              <IconLinkedIn class="social-img" :filled="true" alt="LinkedIn" />
            </a>
          </div>
          <div class="social-item">
            <a href="https://facebook.com/" class="social__link">
              <IconFacebook class="social-img" :filled="true" alt="Facebook" />
            </a>
          </div>
          <div v-if="!isTabletBreakpoint" class="social-item">
            <a href="https://habr.com/" class="social__link">
              <IconHabr class="social-img" :filled="true" alt="Habr" />
            </a>
          </div>
        </div>
        <div class="right-col">
          <div class="social-item">
            <a href="https://twitter.com/" class="social__link">
              <IconTwitter class="social-img" :filled="true" alt="Twitter" />
            </a>
          </div>
          <div class="social-item">
            <a href="https://www.instagram.com/" class="social__link">
              <IconInstagram
                class="social-img"
                :filled="true"
                alt="Instagram"
              />
            </a>
          </div>
          <div v-if="!isTabletBreakpoint" class="social-item">
            <a href="https://web.telegram.org/" class="social__link">
              <IconTelegram class="social-img" :filled="true" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="support">
      <div class="new-clients">
        <h3 class="support-title">{{ $t('footer.newClients') }}</h3>
        <a class="header-contact-link phone-link" href="tel:+358942725025">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconPhone class="phone-icon" :filled="true" />
            </div>
            <span class="phone"> +358 942 72 50 25 </span>
          </div>
        </a>
        <a class="header-contact-link email-link" href="mailto:hello@zyfra.com">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconEmail class="email-icon" />
            </div>
            <span class="email"> hello@zyfra.com </span>
          </div>
        </a>
      </div>

      <div class="current-clients">
        <h3 class="support-title support-title--ident">
          {{ $t('footer.currentClients') }} <br />
          {{ $t('footer.adminQuestion') }}
        </h3>
        <a class="header-contact-link phone-link" href="tel:+358942725025">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconPhone class="phone-icon" :filled="true" />
            </div>
            <span class="phone"> +358 942 72 50 25 </span>
          </div>
        </a>
        <a class="header-contact-link email-link" href="mailto:hello@zyfra.com">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconEmail class="email-icon" />
            </div>
            <span class="email"> hello@zyfra.com </span>
          </div>
        </a>
      </div>

      <div class="technical-support">
        <h3 class="support-title support-title--ident">
          {{ $t('footer.technicalSupport') }}
        </h3>
        <p class="phone-text">{{ $t('footer.monitoring') }}</p>
        <a class="header-contact-link phone-link" href="tel:+358942725025">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconPhone class="phone-icon" :filled="true" />
            </div>
            <span class="phone"> +358 942 72 50 25 </span>
          </div>
        </a>
        <p class="phone-text">{{ $t('footer.mining') }}</p>
        <a class="header-contact-link phone-link" href="tel:+358942725025">
          <div class="contact-wrapper">
            <div class="icon-wrap">
              <IconPhone class="phone-icon" :filled="true" />
            </div>
            <span class="phone"> +358 942 72 50 25 </span>
          </div>
        </a>
      </div>
    </div>

    <div class="column-wrap">
      <div class="footer-links about">
        <h3 class="footer-links-title">{{ $t('footer.about') }}</h3>
        <ul class="footer-links-list list-reset">
          <li
            class="footer-links-item"
            v-for="menu in companyLinks"
            :key="menu.id"
          >
            <NuxtLink class="footer-links-link">
              {{ $t(menu.name) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div v-if="isTabletBreakpoint" class="footer-links news">
        <h3 class="footer-links-title">{{ $t('footer.news') }}</h3>
        <ul class="footer-links-list list-reset">
          <li
            class="footer-links-item"
            v-for="menu in newsLinks"
            :key="menu.id"
          >
            <NuxtLink class="footer-links-link">
              {{ $t(menu.name) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-links products">
      <h3 class="footer-links-title">{{ $t('footer.products') }}</h3>
      <ul class="footer-links-list list-reset">
        <li class="footer-links-item" v-for="menu in helpList" :key="menu.id">
          <NuxtLink class="footer-links-link">
            {{ $t(menu.name) }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="footer-links">
      <h3 class="footer-links-title">{{ $t('footer.industry') }}</h3>
      <ul class="footer-links-list list-reset">
        <li
          class="footer-links-item"
          v-for="menu in industryList"
          :key="menu.id"
        >
          <NuxtLink class="footer-links-link">
            {{ $t(menu.name) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconLinkedIn from '@/assets/icons/lnk.svg';
import IconTwitter from '@/assets/icons/tw.svg';
import IconFacebook from '@/assets/icons/fb.svg';
import IconInstagram from '@/assets/icons/inst.svg';
import IconHabr from '@/assets/icons/habr.svg';
import IconTelegram from '@/assets/icons/tg.svg';
import IconPhone from '@/assets/icons/icon-phone.svg';
import IconEmail from '@/assets/icons/icon-email.svg';
import { useZyfraStore } from '@/store/ZyfraStore.js';

const TABLET_BREAKPOINT = 1024;
const zyfraStore = useZyfraStore();
const localePath = useLocalePath();

const newsLinks = reactive([
  { name: 'footer.blog', id: 11 },
  { name: 'footer.media', id: 12 },
  { name: 'footer.webinar', id: 13 },
]);

const companyLinks = reactive([
  { name: 'footer.company', id: 21 },
  { name: 'footer.career', id: 22 },
]);

const helpList = reactive([
  { name: 'footer.mdcplus', id: 31 },
  { name: 'Geonaft', id: 32 },
  { name: 'footer.framework', id: 33 },
  { name: 'footer.openmine', id: 34 },
  { name: 'footer.underground', id: 35 },
  { name: 'footer.safety', id: 36 },
  { name: 'footer.drill', id: 37 },
  { name: 'footer.treatment', id: 38 },
  { name: 'footer.artificial', id: 39 },
]);

const industryList = reactive([
  { name: 'footer.robotics', id: 41 },
  { name: 'footer.miningIndustry', id: 42 },
  { name: 'footer.upstream', id: 43 },
  { name: 'footer.metalworking', id: 44 },
]);

const isTabletBreakpoint = computed(() => {
  if (zyfraStore.screenWidth <= TABLET_BREAKPOINT) return true;
  return false;
});
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  padding-top: 48px;
  padding-bottom: 26px;
  padding-left: 46px;
  padding-right: 41px;
  color: $thunder;
  background-color: $lightgrey;

  & .logo-text {
    margin-bottom: 20px;
    color: $black;
    font-weight: 600;
    font-size: 16px;
  }

  & .logo-img {
    width: 118px;
  }

  & .language-wrap {
    display: flex;
    align-items: center;
    width: 40px;
    margin-bottom: 10px;
  }

  & .language-item {
    width: 20px;
    color: $black;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      color: $christi;
      font-weight: 700;
    }
  }

  .footer-socials {
    display: flex;
    gap: 20px;
    margin-right: 120px;
    margin-top: 24px;
  }

  .social-item {
    margin-bottom: 14px;
  }

  & .social-img {
    width: 22px;
    height: 22px;

    &:hover {
      fill: $christi;
    }
  }

  & .support {
    margin-right: 50px;

    & .support-title {
      margin: 0;
      margin-bottom: 9px;
      padding: 0;
      color: $black;
      font-weight: 600;
      font-size: 14px;

      &--ident {
        margin-top: 10px;
      }
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

  & .footer-links {
    & .footer-links-title {
      margin: 0;
      margin-bottom: 15px;
      padding: 0;
      color: $black;
      font-weight: 600;
      font-size: 14px;
    }

    & .footer-links-item {
      margin-bottom: 15px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: $black;

      &:hover {
        color: $christi;
      }
    }
  }

  & .about {
    max-width: 91px;
    margin-right: 44px;
  }

  & .products {
    margin-right: 20px;
  }
}

@include minidesk {
  .footer {
    row-gap: 30px;
  }
}

@include tablet {
  .footer {
    display: grid;
    grid-template-columns: 235px auto auto 1fr;
    column-gap: 10px;

    & .social-item {
      margin: 0;
    }

    & .col {
      grid-column-start: 1;
      grid-column-end: 5;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    & .language-wrap {
      margin: 0;
      margin-left: auto;
      grid-column-start: 3;
      grid-column-end: 4;
      width: 53px;
    }

    & .footer-socials {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      column-gap: 10px;
      margin: 0 auto;
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
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 40px;
    padding-bottom: 47px;
    padding-left: 27px;
    padding-right: 27px;
    row-gap: 19px;
    column-gap: 70px;

    & .col {
      display: grid;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    & .language-wrap {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    & .footer-socials {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      column-gap: 10px;
      margin: 0;
    }

    & .support {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    & .left-col,
    & .right-col,
    & .footer-socials {
      column-gap: 20px;
    }
  }
}

@include bigdesktop {
  .footer {
    justify-content: center;
    gap: 30px;
  }
}
</style>
