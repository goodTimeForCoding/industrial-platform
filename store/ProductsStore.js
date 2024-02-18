import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products-store',
  state: () => ({
    products: [],
  }),

  actions: {
    async getProducts(locale) {
      const url = useRuntimeConfig().public.getProductsUrl;
      const res = await fetch(`${url}${locale}`);
      const data = await res.json();

      this.products = data.data;
    },
  },
});
