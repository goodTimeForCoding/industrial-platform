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
      const url = useRuntimeConfig().public.getProductsUrl;
      // запросы на бэк надо в try/catch оборачивать, что не подал код
      // в 3 версии vue есть useFetch, вот он из запроса возвращает ошибку, данные, ожидание, вот его не надо - в доке есть описание
      const res = await fetch(`${url}${locale}`);
      const data = await res.json();
      this.products = data.data;
    },
  },
});
