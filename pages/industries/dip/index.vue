<template>
  <div class="main">
    <MainHeaderComponent class="container main-header-container" />
    <div ref="industry">
      <AdvantageComponent />
    </div>
    <TasksComponent />
    <DefinitionComponent />
    <div ref="products">
      <ProductsComponent />
    </div>
    <div ref="education">
      <EducationComponent />
    </div>
    <div class="feedback container" id="feedback" ref="feedback">
      <FeedbackFormComponent />
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
import { onMounted, ref } from 'vue';

const zyfraStore = useZyfraStore();
const industry = ref(null);
const products = ref(null);
const education = ref(null);
const feedback = ref(null);

const setToIndustryDistance = () => {
  const distance = industry.value.offsetTop;
  zyfraStore.updateToIndustryDistance(distance);
};

const setToProductsDistance = () => {
  const distance = products.value.offsetTop;
  zyfraStore.updateToProductsDistance(distance);
};

const setToEducationDistance = () => {
  const distance = education.value.offsetTop;
  zyfraStore.updateToEducationDistance(distance);
};

const setToFeedbackDistance = () => {
  const distance = feedback.value.offsetTop;
  zyfraStore.updateToFeedbackDistance(distance);
};

onMounted(() => {
  setToIndustryDistance();
  setToProductsDistance();
  setToEducationDistance();
  setToFeedbackDistance();
  zyfraStore.removeActiveClass();
});
</script>

<style lang="scss" scoped>
.main-header-container {
  margin-top: 68px;
}

.feedback {
  background-color: $lightgrey;
}

@include tablet {
  .main-header-container {
    margin-top: 0px;
  }
}

@include bigmobile {
  .main-header-container {
    padding: 0;
  }
}
</style>
