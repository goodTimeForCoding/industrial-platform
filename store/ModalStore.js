import { defineStore } from 'pinia';
import { useFeedbackForm } from './FeedbackForm';

// eslint-disable-next-line import/prefer-default-export
export const useModalStore = defineStore({
  id: 'modal-store',
  state: () => ({
    isShowModal: false,
  }),
  persist: true,

  actions: {
    openModal() {
      const feedbackFormStore = useFeedbackForm();

      feedbackFormStore.cleanErrors();
      feedbackFormStore.cleanMessages();
      this.isShowModal = true;
    },

    closeModal() {
      const feedbackFormStore = useFeedbackForm();

      feedbackFormStore.cleanErrors();
      feedbackFormStore.cleanMessages();
      this.isShowModal = false;
    },
  },
});
