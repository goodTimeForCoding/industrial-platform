export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el:any, binding:any) {
      el.addEventListener('click', e => e.stopPropagation());
      document.body.addEventListener('click', binding.value);
    },
    unbind(el:any, binding:any) {
      document.body.removeEventListener('click', binding.value);
    },
  });
});
