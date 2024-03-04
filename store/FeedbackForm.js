import { defineStore } from 'pinia';

export const useFeedbackForm = defineStore({
  id: 'feedback-form-store',
  state: () => {
    return {
      errors: [],
      ruCountries: [],
      enCountries: [],
      messages: [],
      countryCode: 'RU',
      validPhone: '',
      isPhoneValid: '',
    };
  },

  getters: {
    getErrorItem: state => {
      return name => state.errors.find(item => item.name === name);
    },

    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    updateRuCountries(countriesArr) {
      this.ruCountries = countriesArr;
    },

    updateEnCountries(countriesArr) {
      this.enCountries = countriesArr;
    },

    cleanErrors() {
      this.errors = [];
    },

    cleanMessages() {
      this.messages = [];
    },

    addErrors(error) {
      this.errors.push(error);
    },

    addCountryCode(code) {
      this.countryCode = code;
    },

    addValidPhone(valid) {
      this.validPhone = valid;
    },

    addIsPhoneValid(isValid) {
      this.isPhoneValid = isValid;
    },

    setMessage(messageObj) {
      this.messages.unshift(messageObj);
    },

    setNewMessageArray(messageArr) {
      this.messages = messageArr;
    },

    async postFeedbackData(data) {
      const url = useRuntimeConfig().public.postFormUrl;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
    },
  },
});
