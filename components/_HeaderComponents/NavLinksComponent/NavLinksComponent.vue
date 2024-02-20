<template>
  <div class="nav-links">
    <ul class="list-reset links-list">
      <li v-for="(link, index) in menuLinks" :key="index" class="link-item">
        <NuxtLink class="link" :to="$t(link.path)">
          {{ $t(link.name) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavLinksComponent',
  props: {
    menuLinks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.nav-links {
  display: flex;
  flex-direction: column;
  width: 210px;
  background-color: $white;
  border-radius: 4px;

  & .link-item {
    padding: 8px 17px;
    transition: 0.2s;

    &:first-child {
      border-radius: 4px 4px 0 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }

    &:hover {
      background-color: $christi;
    }

    &:hover .link {
      color: $white;
    }
  }

  & .link {
    color: $black;
    transition: 0.3s;
  }
}

@include tablet {

  .nav-links {
    font-weight: 500;
    background-color: transparent;
    border: none;

    & .link-item {
      position: relative;
      width: fit-content;
      padding: 0;
      padding-top: 15px;
      padding-bottom: 15px;
      line-height: normal;
      border-radius: 4px;
      transition: 0.2s;

      &:hover {
        background-color: transparent;

        &::before {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          background: $christi;
          content: '';
        }
      }
    }

    & .link {
      color: $white;
    }
  }
}
</style>
