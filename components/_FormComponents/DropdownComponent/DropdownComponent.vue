<template>
  <section class="dropdown-component" v-click-outside="noVisible">
    <div class="selected-item">
      <input
        :class="addSelectClass"
        @click="changeView"
        @input="inputChange"
        v-model="searchQuery"
        type="text"
        :placeholder="addPlaceholder"
      />
      <div class="dropdown-icon-wrap" @click="changeView">
        <img
          :class="['dropdown-icon', addIconDropDownClass]"
          src="/support-icons/arrow.svg"
        />
      </div>
    </div>
    <div :class="['dropdown-popover', addPopoverClass]">
      <span v-if="isFilteredData" class="not-data-text">Нет данных</span>
      <ul class="options">
        <li
          @click="selectItem(item)"
          v-for="(item, index) in filteredUser"
          :key="`item-${index}`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: () => `Выберите значение`,
  },
});

const searchQuery = ref('');
const selectedItem = ref('');
const isVisible = ref(false);
const emit = defineEmits(['select']);

const noVisible = () => {
  isVisible.value = false;
};

const inputChange = () => {
  isVisible.value = true;
  selectedItem.value = null;
  emit('select', { country: selectedItem.value });
};

const changeView = () => {
  isVisible.value = !isVisible.value;
};

const selectItem = item => {
  selectedItem.value = item;
  isVisible.value = false;
  emit('select', { country: selectedItem.value });
  searchQuery.value = '';
};

const filteredUser = computed(() => {
  if (searchQuery.value === '') return props.options;

  return props.options.filter(item =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

/**
 * Добавляет класс для placeholder при выборе элемента из выпадающего списка, либо если элемент определён через props.
 * @return {string} название класса
 */
const addSelectClass = computed(() => {
  if (selectedItem.value) return 'dropdown-input';
});

const addPlaceholder = computed(() => {
  if (selectedItem.value) return selectedItem.value;

  return props.placeholder;
});

const addIconDropDownClass = computed(() => {
  if (isVisible.value) return 'dropdown';
});

const addPopoverClass = computed(() => {
  if (isVisible.value) return 'visible';

  return 'invisible';
});

const isFilteredData = computed(() => filteredUser.length === 0);

onBeforeMount(() => {
  selectItem(props.placeholder);
});
</script>

<style scoped lang="scss">
.dropdown-component {
  position: relative;
  z-index: 4;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;

  .selected-item {
    padding: 0;
    background: $white;
    border-radius: 5px;
    cursor: pointer;
    height: 100%;

    input {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      padding-left: 14px;
      border: unset;
      border-radius: 5px;
      font-weight: 500;
    }

    .dropdown-input::placeholder {
      color: $black;
    }

    .dropdown-icon-wrap {
      position: absolute;
      top: 2px;
      right: 0;
      z-index: 10;
      padding: 14px;
      cursor: pointer;
    }

    .dropdown-icon {
      transform: rotate(0deg);
      transition: all 0.3s ease;
    }

    .dropdown-icon.dropdown {
      transform: rotate(180deg);
      transition: all 0.3s ease;
    }
  }

  .dropdown-popover {
    position: absolute;
    top: 40px;
    right: 0;
    left: 0;
    z-index: 2;
    max-width: 100%;
    max-height: 0;
    overflow: hidden;
    background-color: $white;
    border-radius: 4px;
    visibility: hidden;

    &.visible {
      max-height: 450px;
      visibility: visible;
    }

    .options {
      width: 100%;
      max-height: 180px;
      margin: 0;
      padding-left: 8px;
      overflow-x: hidden;
      overflow-y: scroll;
      text-align: left;
      list-style: none;
    }

    .options li {
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid lightgray;
      cursor: pointer;
    }

    .not-data-text {
      display: inline-block;
      width: 100%;
      padding: 13px;
      text-align: center;
    }
  }
}
</style>
