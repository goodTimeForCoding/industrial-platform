import { defineStore } from 'pinia';
import { useFeedbackForm } from './FeedbackForm';

export const useModalStore = defineStore({
  id: 'modal-store',
  state: () => {
    return {
      isShowModal: false,
    };
  },
  persist: true,

  actions: {
    /**
     * Открывает модальное окно с формой
     */
    openModal() {
      const feedbackFormStore = useFeedbackForm();
      feedbackFormStore.cleanErrors();
      feedbackFormStore.cleanMessages();
      this.isShowModal = true;
    },

    /**
     * Закрывает модальное окно с формой
     */
    closeModal() {
      const feedbackFormStore = useFeedbackForm();
      feedbackFormStore.cleanErrors();
      feedbackFormStore.cleanMessages();
      this.isShowModal = false;
    },
  },
});
