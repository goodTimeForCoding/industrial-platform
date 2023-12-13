<template>
  <div class="main">
    <MainHeaderComponent class="container main-header-container" />
    <!-- почему сразу не повесить ref на компонент   -->
    <!--  этот компонент и  другие ниже имеет стиль контейнер, почему не сделать див с классом container и в него уже положить компоненты   -->
    <div ref="industry">
      <AdvantageComponent />
    </div>
    <TasksComponent />
    <DefinitionComponent />
    <div ref="products">
      <!-- почему сразу не повесить ref на компонент   -->
      <ProductsComponent />
    </div>
    <div ref="education">
      <!-- почему сразу не повесить ref на компонент   -->
      <EducationComponent />
    </div>
    <!-- почему сразу не повесить клас id ref на компонент   -->
    <div class="feedback container" id="feedback" ref="feedback">
      <FeedbackFormComponent />
    </div>
  </div>
</template>

<script setup>
import { useZyfraStore } from '@/store/ZyfraStore.js';
import { onMounted, ref } from 'vue';
// работает, но выглядит как то не айс, в идеале возможно есть более изящное решение :)
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
// почему фон вне компонента задан?
// к примеру есть форма у нее есть дефолтный цвет, в другом месте при подключении цвет переопределяется
// в FeedbackFormComponen, я не увидел что бы задавался цвет фона
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
