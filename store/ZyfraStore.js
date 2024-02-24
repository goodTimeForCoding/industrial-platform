import { defineStore } from 'pinia';

export const useZyfraStore = defineStore({
  id: 'zyfra-store',
  state: () => {
    return {
      isSidebarClosed: false,
      screenWidth: null,
      scrollDistance: null,
      toIndustryDistance: null,
      toProductsDistance: null,
      toEducationDistance: null,
      toFeedbackDistance: null,
      isIndustryActive: false,
      isProductsActive: false,
      isEducationActive: false,
      isFeedbackActive: false,
    };
  },
  persist: true,

  actions: {
    /**
     * Скрывает/показывает боковое меню в десктопной версии
     */
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
    },

    /**
     * Сохраняет в стор текущую ширину окна
     */
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },

    /**
     * Сохраняет в стор текущий отступ от верхнего края страницы
     */
    updateScrollDistance() {
      this.scrollDistance = window.scrollY;
    },

    /**
     * Сохраняет в стор отступ от верхнего края страницы до компонента AdvantageComponent
     * @param {number} dist - Верхняя позиция элемента (в пикселях) относительно верхней части родительского элемента.
     */
    updateToIndustryDistance(dist) {
      this.toIndustryDistance = dist;
    },

    /**
     * Сохраняет в стор отступ от верхнего края страницы до компонента ProductsComponent
     * @param {number} dist - Верхняя позиция элемента (в пикселях) относительно верхней части родительского элемента.
     */
    updateToProductsDistance(dist) {
      this.toProductsDistance = dist;
    },

    /**
     * Сохраняет в стор отступ от верхнего края страницы до компонента EducationComponent
     * @param {number} dist - Верхняя позиция элемента (в пикселях) относительно верхней части родительского элемента.
     */
    updateToEducationDistance(dist) {
      this.toEducationDistance = dist;
    },

    /**
     * Сохраняет в стор отступ от верхнего края страницы до компонента FeedbackFormComponent
     * @param {number} dist - Верхняя позиция элемента (в пикселях) относительно верхней части родительского элемента.
     */
    updateToFeedbackDistance(dist) {
      this.toFeedbackDistance = dist;
    },

    /**
     * Меняет состояние компонента AdvantageComponent на активный,
     * далее добавляются соответствующие классы для компонента.
     */
    setIndustryActiveClass() {
      this.isIndustryActive = true;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },

    /**
     * Перемещает к компоненту AdvantageComponent при клике в боковом меню
     */
    setIndustryActive() {
      this.setIndustryActiveClass();
      window.scrollTo({
        top: this.toIndustryDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    /**
     * Меняет состояние компонента ProductsComponent на активный,
     * далее добавляются соответствующие классы для компонента.
     */
    setProductsActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = true;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },

    /**
     * Перемещает к компоненту ProductsComponent при клике в боковом меню
     */
    setProductsActive() {
      this.setProductsActiveClass();
      window.scrollTo({
        top: this.toProductsDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    /**
     * Меняет состояние компонента EducationComponent на активный,
     * далее добавляются соответствующие классы для компонента.
     */
    setEducationActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = true;
      this.isFeedbackActive = false;
    },

    /**
     * Перемещает к компоненту EducationComponent при клике в боковом меню
     */
    setEducationActive() {
      this.setEducationActiveClass();
      window.scrollTo({
        top: this.toEducationDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    /**
     * Меняет состояние компонента FeedbackFormComponent на активный,
     * далее добавляются соответствующие классы для компонента.
     */
    setFeedbackActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = true;
    },

    /**
     * Перемещает к компоненту FeedbackFormComponent при клике в боковом меню
     */
    setFeedbackActive() {
      this.setFeedbackActiveClass();
      window.scrollTo({
        top: this.toFeedbackDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    /**
     * Для всех компонентов задаётся состояние не активный, и добавляются соответствующие классы.
     */
    removeActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },
  },
});
