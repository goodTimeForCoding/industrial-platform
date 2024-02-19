import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products-store',
  state: () => {
    return {
      products: [],
    };
  },

  actions: {
    async getProducts(locale) {
      /* eslint-disable */
      const url = useRuntimeConfig().public.getProductsUrl;
      /* eslint-enable */
      const res = await fetch(`${url}${locale}`);
      const data = await res.json();
      this.products = data.data;
    },
  },
});
