import { defineStore } from 'pinia';
import { useFeedbackForm } from './FeedbackForm';

export const useProductsStore = defineStore({
  id: 'products-store',
  state: () => {
    return {
      products: [],
    };
  },

  actions: {
    async getProducts(locale) {
      // eslint-disable-next-line no-undef
      const url = useRuntimeConfig().public.getProductsUrl;
      // eslint-disable-next-line no-undef
      const { data, error } = await useFetch(`${url}${locale}`);
      if (data.value) {
        // eslint-disable-next-line no-undef
        this.products = toRaw(data.value.data);
      } else {
        const feedbackFormStore = useFeedbackForm();
        feedbackFormStore.setMessage({
          name: error.value,
          type: 'error',
          id: Date.now().toLocaleString(),
        });
      }
    },
  },
});
