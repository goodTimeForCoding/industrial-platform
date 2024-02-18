import { defineStore } from 'pinia';

export const useZyfraStore = defineStore({
  id: 'zyfra-store',
  state: () => ({
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
  }),
  persist: true,

  actions: {
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
    },

    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },

    updateScrollDistance() {
      this.scrollDistance = window.scrollY;
    },

    updateToIndustryDistance(dist) {
      this.toIndustryDistance = dist;
    },

    updateToProductsDistance(dist) {
      this.toProductsDistance = dist;
    },

    updateToEducationDistance(dist) {
      this.toEducationDistance = dist;
    },

    updateToFeedbackDistance(dist) {
      this.toFeedbackDistance = dist;
    },

    setIndustryActiveClass() {
      this.isIndustryActive = true;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },

    setIndustryActive() {
      this.setIndustryActiveClass();
      window.scrollTo({
        top: this.toIndustryDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    setProductsActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = true;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },

    setProductsActive() {
      this.setProductsActiveClass();
      window.scrollTo({
        top: this.toProductsDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    setEducationActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = true;
      this.isFeedbackActive = false;
    },

    setEducationActive() {
      this.setEducationActiveClass();
      window.scrollTo({
        top: this.toEducationDistance,
        left: 0,
        behavior: 'smooth',
      });
    },

    setFeedbackActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = true;
    },

    removeActiveClass() {
      this.isIndustryActive = false;
      this.isProductsActive = false;
      this.isEducationActive = false;
      this.isFeedbackActive = false;
    },

    setFeedbackActive() {
      this.setFeedbackActiveClass();
      window.scrollTo({
        top: this.toFeedbackDistance,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
});
