<template>
  <div class="notification">
    <transition-group
      name="v-transition-animate"
      tag="div"
      class="messages_list"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['notification__content', message.type]"
      >
        <div class="content__text">
          <span>{{ message.name }}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'NotificationComponent',

  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
    },
    timeout: {
      type: Number,
      default: 5000,
    },
  },
  emits: ['updateMessages'],

  watch: {
    messages: {
      handler() {
        this.hideNotification();
      },
      deep: true,
    },
  },

  mounted() {
    this.hideNotification();
  },

  methods: {
    /**
     * удаляет первое добавленное в массив сообщение каждые 5 секунд
     */
    hideNotification() {
      setTimeout(() => {
        const messagesArray = this.messages.map(a => ({ ...a }));
        if (this.messages.length) {
          messagesArray.splice(messagesArray.length - 1, 1);
          this.$emit('updateMessages', messagesArray);
        }
      }, this.timeout);
    },
  },
};
</script>

<style lang="scss">
.notification {
  position: fixed;
  top: 30px;
  right: 16px;
  z-index: 10;

  &__messages_list {
    display: flex;
    flex-direction: column-reverse;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 16px;
    padding: 16px;
    color: $white;
    background: $laurel;
    border-radius: 4px;

    &.error {
      background: $red;
    }

    &.warning {
      background: $orange;
    }

    &.check {
      background: $laurel;
    }
  }

  .content {
    &__text {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.v-transition-animate {
  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.6s ease;
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave {
    height: 50px;
    opacity: 1;
  }

  &-leave-active {
    transition:
      transform 0.6s ease,
      opacity 0.6s,
      height 0.6s 0.2s;
  }

  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }

  &-move {
    transition: transform 0.6s ease;
  }
}
</style>
