<template>
  <div>
    <div>
      <NotificationComponent
        :messages="feedbackFormStore.getMessages"
        @update-messages="feedbackFormStore.setNewMessageArray"
      />
    </div>

    <form :class="['feedback-form', addModalClass]" novalidate>
      <div v-for="data of formDatum" :key="data.id" class="form-group">
        <BaseInput
          v-if="data.type === 'text'"
          v-model.trim="data.value"
          :class="data.className"
          :type="data.type"
          :placeholder="$t(data.placeholder)"
        />

        <DropdownComponent
          v-if="data.type === 'dropDown'"
          :class="data.className"
          :options="getLocaleCountries()"
          :placeholder="$t(data.placeholder)"
          @select="addCountryCode"
        />

        <MazPhoneNumberInput
          v-if="data.type === 'phoneNumberInput'"
          v-model.trim="data.value"
          :class="data.className"
          :placeholder="$t(data.placeholder)"
          :translations="addTranslation()"
          country-locale="en"
          :default-country-code="feedbackFormStore.countryCode"
          no-search
          @update="onUpdate"
        />
        <span
          v-if="showErrorText(data.formName)"
          :class="[data.errorTextClass, deleteErrorMessage()]"
        >
          {{ showErrorText(data.formName) }}
        </span>
      </div>

      <div class="btn-text-wrap">
        <BaseCheckbox
          v-if="modalStore.isShowModal"
          :id="consent"
          class="consent-wrap"
          :label="$t('feedbackForm.consent')"
        />

        <BaseCheckbox
          v-if="modalStore.isShowModal"
          :id="subscrip"
          class="subscrip"
          :label="$t('feedbackForm.subscrip')"
        />

        <button class="btn btn-feedback" type="button" @click="onSubmit">
          {{ $t('feedbackForm.btnText') }}
        </button>
        <p v-if="!modalStore.isShowModal" class="agreement">
          {{ $t('feedbackForm.agreementTop') }}<br />
          {{ $t('feedbackForm.agreementBottom') }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';

import DropdownComponent from '@/components/_FormComponents/DropdownComponent/DropdownComponent.vue';
import NotificationComponent from '@/components/_FormComponents/NotificationComponent/NotificationComponent.vue';
import BaseCheckbox from '@/components/_UI/BaseCheckbox/BaseCheckbox.vue';
import BaseInput from '@/components/_UI/BaseInput/BaseInput.vue';
import countriesArr from '@/mock/countries.json';
import { useFeedbackForm } from '@/store/FeedbackForm';
import { useModalStore } from '@/store/ModalStore';

const props = defineProps({
  isModal: {
    type: Boolean,
  },
});

const modalStore = useModalStore();
const i18nLocale = useI18n();
const feedbackFormStore = useFeedbackForm();
const recaptchaInstance = useReCaptcha();

const formDatum = reactive([
  {
    id: 1,
    value: '',
    placeholder: 'feedbackForm.firstName',
    type: 'text',
    formName: 'firstName',
    className:
      'feedback-form-input feedback-form-firstname feedback-form--short',
    errorTextClass: 'error-text error-text-left',
  },
  {
    id: 2,
    value: '',
    placeholder: 'feedbackForm.lastName',
    type: 'text',
    formName: 'lastName',
    className:
      'feedback-form-input feedback-form-lastname feedback-form--short',
    errorTextClass: 'error-text',
  },
  {
    id: 3,
    value: '',
    placeholder: 'feedbackForm.position',
    type: 'text',
    formName: 'position',
    className:
      'feedback-form-input feedback-form-position feedback-form--short',
    errorTextClass: 'error-text error-text-left',
  },
  {
    id: 4,
    value: '',
    placeholder: 'feedbackForm.company',
    type: 'text',
    formName: 'company',
    className: 'feedback-form-input feedback-form-company feedback-form--short',
    errorTextClass: 'error-text',
  },
  {
    id: 5,
    value: '',
    placeholder: 'feedbackForm.startCountry',
    type: 'dropDown',
    formName: 'country',
    className: 'feedback-form-input feedback-form-country feedback-form--short',
    errorTextClass: 'error-text error-text-left',
  },
  {
    id: 6,
    value: '',
    placeholder: 'Email *',
    type: 'text',
    formName: 'email',
    className: 'feedback-form-input feedback-form-email feedback-form--short',
    errorTextClass: 'error-text',
  },
  {
    id: 7,
    value: '',
    placeholder: 'feedbackForm.phone',
    type: 'phoneNumberInput',
    formName: 'phone',
    className: 'feedback-form-input feedback-form-phone feedback-form--long',
    errorTextClass: 'error-text phone-error-text',
  },
  {
    id: 8,
    value: '',
    placeholder: 'feedbackForm.comment',
    type: 'text',
    formName: 'comment',
    className: 'feedback-form-input feedback-form-comment feedback-form--long',
    errorTextClass: 'error-text comment-error-text',
  },
]);

const addModalClass = computed(() => {
  if (props.isModal) return 'feedback-form-modal';
  return '';
});

const addTranslation = () => {
  const translation = {
    countrySelector: {
      placeholder: '',
    },
  };
  if (i18nLocale.locale.value === 'ru') {
    translation.countrySelector.placeholder = 'Код страны';
  }
  if (i18nLocale.locale.value === 'en') {
    translation.countrySelector.placeholder = 'Country code';
  }
  return translation;
};

const deleteErrorMessage = () => {
  if (modalStore.isShowModal) return 'nomessage';
  return '';
};

const getRuCountries = () => {
  return countriesArr.ru.map(item => item.name);
};

const getEnCountries = () => {
  return countriesArr.en.map(item => item.name);
};

const getLocaleCountries = () => {
  if (i18nLocale.locale.value === 'en') return feedbackFormStore.enCountries;
  if (i18nLocale.locale.value === 'ru') return feedbackFormStore.ruCountries;
  return false;
};

const addCountryCode = countryData => {
  formDatum[4].value = countryData.country;
  let selectCountry;
  if (i18nLocale.locale.value === 'ru') {
    selectCountry = countriesArr.ru.find(item => {
      return item.name === formDatum[4].value;
    });
  }
  if (i18nLocale.locale.value === 'en') {
    selectCountry = countriesArr.en.find(item => {
      return item.name === formDatum[4].value;
    });
  }
  if (selectCountry) {
    feedbackFormStore.addCountryCode(selectCountry.code);
  }
};

const onUpdate = payload => {
  feedbackFormStore.addValidPhone(payload.e164);
  feedbackFormStore.addIsPhoneValid(payload.isValid);
};

const adaptForm = token => {
  return {
    locale: 'ru',
    firstName: formDatum[0].value,
    lastName: formDatum[1].value,
    position: formDatum[2].value,
    company: formDatum[3].value,
    industry: 'Процессные индустрии',
    country: formDatum[4].value,
    email: formDatum[5].value,
    phone: formDatum[6].value,
    comment: formDatum[7].value,
    countryCode: feedbackFormStore.countryCode,
    recaptchaToken: token,
    type: 'contact',
    page: '/ru/product/industrial-iot-platform/',
  };
};

/* eslint-disable */
const validEmail = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
/* eslint-enable  */

const checkValid = () => {
  feedbackFormStore.cleanErrors();
  formDatum.forEach(item => {
    if (item.formName === 'comment') return;

    if (item.value === '' || item.value === null) {
      feedbackFormStore.addErrors({
        name: item.formName,
        errorText: i18nLocale.t('validation.requered'),
      });
    }

    if (!validEmail(item.value) && item.formName === 'email') {
      feedbackFormStore.addErrors({
        name: item.formName,
        errorText: i18nLocale.t('validation.email'),
      });
    }

    if (feedbackFormStore.isPhoneValid === false && item.formName === 'phone') {
      feedbackFormStore.addErrors({
        name: item.formName,
        errorText: i18nLocale.t('validation.phone'),
      });
    }
  });
};

const showErrorText = name => {
  const errElement = feedbackFormStore.getErrorItem(name);
  if (errElement) {
    return errElement.errorText;
  }
  return errElement;
};

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('login');
  return token;
};

const onSubmit = async () => {
  try {
    checkValid();
    if (feedbackFormStore.errors.length === 0) {
      const token = await recaptcha();
      const data = adaptForm(token);
      await feedbackFormStore.postFeedbackData(data);
      feedbackFormStore.setMessage({
        name: i18nLocale.t('validation.success'),
        type: 'check',
        id: Date.now().toLocaleString(),
      });
    } else {
      feedbackFormStore.setMessage({
        name: i18nLocale.t('validation.error'),
        type: 'error',
        id: Date.now().toLocaleString(),
      });
    }
  } catch (error) {
    feedbackFormStore.setMessage({
      name: error.message,
      type: 'error',
      id: Date.now().toLocaleString(),
    });
  }
};

onMounted(() => {
  feedbackFormStore.updateRuCountries(getRuCountries());
  feedbackFormStore.updateEnCountries(getEnCountries());
});
</script>

<style lang="scss" scoped>
.feedback-form {
  max-width: 670px;

  & .nomessage {
    display: none;
  }

  &--short {
    min-width: 329px;
  }

  &--long {
    min-width: 670px;
  }

  .form-group {
    position: relative;
    display: inline-block;
  }

  .error-text {
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 5;
    color: red;
    font-size: 10px;
  }

  .error-text-left {
    right: 16px;
    bottom: 15px;
  }

  .feedback-form-input {
    height: 49px;
    margin: 0;
    padding: 0;
    padding-left: 14px;
    color: $black;
    font-weight: 500;
    font-size: 14px;
    background: $white;
    border: unset;
    border-radius: 4px;

    &::placeholder {
      color: $stardust;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .feedback-form-firstname,
  .feedback-form-position,
  .feedback-form-country {
    margin-right: 12px;
    margin-bottom: 10px;
  }

  .feedback-form-country {
    padding: 0;
  }

  .btn-feedback {
    position: relative;
    display: inline-block;
    margin-right: 14px;
    padding: 18px 28px;
    color: $white;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    background: $christi;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background: $vida;
    }

    &:focus:not(:active) {
      background: $christi;
    }

    &:active {
      background: $sanfelix;
    }
  }

  .feedback-form-comment {
    margin-top: 10px;
  }

  .agreement {
    display: inline-block;
    max-width: 490px;
    margin: 0;
    color: $dustygray;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  .btn-text-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 19px;
  }

  .feedback-form-phone {
    padding: 0;
    display: flex;
    align-items: center;
  }
}

.feedback-form-modal {
  & .nomessage {
    display: block;
  }

  & .feedback-form-input {
    height: 45px;
  }

  & .feedback-form--short {
    min-width: 237px;
    border: 1px solid $haze;
  }

  & .feedback-form--long {
    min-width: 483px;
    border: 1px solid $haze;
  }

  & .feedback-form-firstname,
  & .feedback-form-position,
  & .feedback-form-country {
    margin-right: 9px;
    margin-bottom: 12px;
  }

  & .consent-wrap {
    margin-top: 12px;
    margin-bottom: 19px;
  }

  & .subscrip {
    margin-bottom: 31px;
  }

  & .btn-feedback {
    margin: 0 auto;
    padding: 18px 50px;
    background: $dustygray;

    &:hover,
    &:focus {
      background: $abbey;
    }

    &:focus:not(:active) {
      background: $dustygray;
    }

    &:active {
      background: $thunder;
    }
  }
}

@include bigmobile {
  .feedback-form-modal {
    & .feedback-form--long,
    & .feedback-form--short {
      min-width: 280px;
    }

    & .btn-text-wrap {
      margin-top: 0px;
    }

    & .feedback-form-input {
      height: 40px;
    }

    & .consent-wrap {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    & .subscrip {
      margin-bottom: 5px;
    }
  }
}

@include minitablet {
  .feedback-form {
    width: 100%;

    &--short {
      min-width: 100%;
    }

    &--long {
      min-width: 100%;
    }

    .feedback-form-firstname,
    .feedback-form-position,
    .feedback-form-country,
    .feedback-form-comment {
      margin: 0;
    }

    .feedback-form-input {
      margin-bottom: 10px;
    }

    .btn-feedback {
      width: 100%;
      margin: 0 auto;
    }

    .agreement {
      max-width: 100%;
      margin-top: 33px;

      br {
        display: none;
      }
    }

    .form-group {
      display: block;
    }

    .error-text {
      right: 5px;
      bottom: 12px;
    }

    .error-text-left {
      right: 5px;
      bottom: 12px;
    }

    .phone-error-text {
      bottom: 2px;
    }
  }

  .feedback-form-modal {
    & .feedback-form--long,
    & .feedback-form--short {
      min-width: 100%;
    }

    & .feedback-form-input {
      margin-bottom: 6px;
      height: 40px;
    }

    & .btn-text-wrap {
      margin-top: 10px;
    }
  }
}
</style>
