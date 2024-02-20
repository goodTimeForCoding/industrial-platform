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
    <div id="feedback" ref="feedback" class="feedback container">
      <FeedbackFormComponent />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MainHeaderComponent from '@/components/MainHeaderComponent/MainHeaderComponent.vue';
import AdvantageComponent from '@/components/AdvantageComponent/AdvantageComponent.vue';
import TasksComponent from '@/components/TasksComponent/TasksComponent.vue';
import DefinitionComponent from '@/components/DefinitionComponent/DefinitionComponent.vue';
import ProductsComponent from '@/components/ProductsComponent/ProductsComponent.vue';
import EducationComponent from '@/components/EducationComponent/EducationComponent.vue';
import FeedbackFormComponent from '@/components/_FormComponents/FeedbackFormComponent/FeedbackFormComponent.vue';
import { useZyfraStore } from '@/store/ZyfraStore';

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
    margin-top: 0;
  }
}

@include bigmobile {

  .main-header-container {
    padding: 0;
  }
}
</style>
