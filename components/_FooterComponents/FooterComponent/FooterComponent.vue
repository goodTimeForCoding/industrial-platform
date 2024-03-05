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

      <LangSwitcher class="language-wrap lang-switcher-footer" />
      <SocialsComponent :is-tablet-breakpoint="isTabletBreakpoint" />
    </div>

    <div class="support-wrap">
      <SupportComponent :title="$t('footer.newClients')" />
      <SupportComponent :title="$t('footer.currentClients')" />
      <SupportComponent
        :title="$t('footer.technicalSupport')"
        :text1="$t('footer.monitoring')"
        :text2="$t('footer.mining')"
        :is-technical-support="true"
      />
    </div>

    <div class="column-wrap">
      <LinksListComponent
        class="about"
        :title="$t('footer.about')"
        :links="companyLinks"
      />

      <LinksListComponent
        v-if="isTabletBreakpoint"
        :title="$t('footer.news')"
        :links="newsLinks"
      />
    </div>

    <LinksListComponent
      class="products"
      :title="$t('footer.products')"
      :links="helpList"
    />

    <LinksListComponent :title="$t('footer.industry')" :links="industryList" />
  </div>
</template>

<script setup>
import LinksListComponent from '@/components/_FooterComponents/LinksListComponent/LinksListComponent.vue';
import SocialsComponent from '@/components/_FooterComponents/SocialsComponent/SocialsComponent.vue';
import SupportComponent from '@/components/_FooterComponents/SupportComponent/SupportComponent.vue';
import LangSwitcher from '@/components/LangSwitcher/LangSwitcher.vue';
import { useZyfraStore } from '@/store/ZyfraStore';

const TABLET_BREAKPOINT = 1179;
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

/**
 * Отслеживает ширину окна браузера и сравнивает с значением TABLET_BREAKPOINT
 * для условного рендеринга
 */
const isTabletBreakpoint = computed(() => {
  return zyfraStore.screenWidth <= TABLET_BREAKPOINT;
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

    & .support-wrap {
      grid-column-start: 1;
      grid-column-end: 3;
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
