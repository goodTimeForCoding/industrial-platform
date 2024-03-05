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
    /**
     * Сохраняет в стор список стран на русском языке
     * @param {Array} dist - Массив со странами на русском языке
     */
    updateRuCountries(countriesArr) {
      this.ruCountries = countriesArr;
    },

    /**
     * Сохраняет в стор список стран на английском языке
     * @param {Array} countriesArr - Массив со странами на английском языке
     */
    updateEnCountries(countriesArr) {
      this.enCountries = countriesArr;
    },

    /**
     * Очищает все ошибки появляющиеся при заполнении формы
     */
    cleanErrors() {
      this.errors = [];
    },

    /**
     * Очищает все уведомления появляющиеся в виде всплывающего окна
     */
    cleanMessages() {
      this.messages = [];
    },

    /**
     * Добавляет в массив сообщение ошибки валидации формы
     * @param {object} error - объект с ошибкой
     * @param {string} error.name - название формы
     * @param {string} error.errorText - текст ошибки
     */
    addError(error) {
      this.errors.push(error);
    },

    /**
     * Добавляет в стор значение кода страны
     * @param {string} code - код страны (например: KZ, AF, RU)
     */
    addCountryCode(code) {
      this.countryCode = code;
    },

    /**
     * Добавляет в стор валидность телефонного номера
     * @param {boolean} isValid - валидность телефонного номера true/false
     */
    addIsPhoneValid(isValid) {
      this.isPhoneValid = isValid;
    },

    /**
     * Добавляет в массив всплывающих сообщений новое сообщение в начало массива
     * @param {object} messageObj - объект с ошибкой
     * @param {string} messageObj.name - текст сообщения
     * @param {string} messageObj.type - тип всплывающего сообщения (ошибка/успех)
     * @param {string} messageObj.id - уникальный идентификатор
     */
    setMessage(messageObj) {
      this.messages.unshift(messageObj);
    },

    /**
     * Обновляет массив с высплывающими сообщениями
     * @param {Array} messageArr - обновлённый массив с сообщениями,
     * первое добавленное в массив сообщение удаляется через 5 секунд
     */
    setNewMessageArray(messageArr) {
      this.messages = messageArr;
    },

    /**
     * Отправляет форму с данными из формы
     * @param {object} data - объект с данными из формы
     */
    async postFeedbackData(data) {
      // eslint-disable-next-line no-undef
      const url = useRuntimeConfig().public.postFormUrl;
      // eslint-disable-next-line no-undef
      const { error } = useFetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      if (error.value) {
        this.messages.unshift({
          name: error.value,
          type: 'error',
          id: Date.now().toLocaleString(),
        });
      }
    },
  },
});
