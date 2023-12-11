export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el.addEventListener('click', e => e.stopPropagation());
      document.body.addEventListener('click', binding.value);
    },
    unbind(el, binding) {
      document.body.removeEventListener('click', binding.value);
    },
  });
});
