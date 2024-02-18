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
      <SocialsComponent :isTabletBreakpoint="isTabletBreakpoint" />
    </div>

    <div class="support-wrap">
      <SupportComponent :title="$t('footer.newClients')" />
      <SupportComponent :title="$t('footer.currentClients')" />
      <SupportComponent
        :title="$t('footer.technicalSupport')"
        :text1="$t('footer.monitoring')"
        :text2="$t('footer.mining')"
        :isTechnicalSupport="true"
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
import LangSwitcher from '@/components/LangSwitcher/LangSwitcher.vue';
import SocialsComponent from '@/components/_FooterComponents/SocialsComponent/SocialsComponent.vue';
import SupportComponent from '@/components/_FooterComponents/SupportComponent/SupportComponent.vue';
import LinksListComponent from '@/components/_FooterComponents/LinksListComponent/LinksListComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore.js';

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

const isTabletBreakpoint = computed(
  () => zyfraStore.screenWidth <= TABLET_BREAKPOINT
);
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  padding: 48px 41px 26px 46px;
  background-color: $lightgrey;
  color: $thunder;

  & .logo-text {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: $black;
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
      grid-column: 1 / 5;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    & .language-wrap {
      width: 53px;
      margin: 0;
      margin-left: auto;
      grid-column: 3 / 4;
    }
  }
}

@include bigmobile {

  .footer {
    display: grid;
    padding: 40px 27px 47px;
    grid-template-columns: 1fr 1fr;
    gap: 19px 70px;

    & .col {
      display: grid;
      grid-column: 1 / 3;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    & .language-wrap {
      grid-column: 2 / 3;
    }

    & .support-wrap {
      grid-column: 1 / 3;
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
