<template>
  <div class="tasks container">
    <div class="tasks-wrap">
      <h2 class="title">{{ $t('tasks.title') }}</h2>
      <ul class="tasks-list list-reset">
        <li class="task-item">
          {{ $t('tasks.task1') }}
        </li>
        <li class="task-item">{{ $t('tasks.task2') }}</li>
        <li class="task-item">{{ $t('tasks.task3') }}</li>
        <li class="task-item">
          {{ $t('tasks.task4') }}
        </li>
        <li class="task-item">{{ $t('tasks.task5') }}</li>
        <li class="task-item">{{ $t('tasks.task6') }}</li>
        <li class="task-item">{{ $t('tasks.task7') }}</li>
      </ul>
    </div>
    <div class="screen-wrap">
      <img
        class="screen-img"
        src="/screen-video2.png"
        width="601"
        height="359"
        alt="скрин видео"
      />
      <img class="pause-logo" src="/pause-video.svg" alt="Логотип пауза" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tasks {
  position: relative;
  top: -58px;
  display: flex;
  gap: 32px;
  justify-content: space-around;
  padding-bottom: 54px;
  background-color: $lightgrey;

  &::after {
    position: absolute;
    bottom: -16px;
    right: 0;
    z-index: 1;
    border-top: 0;
    border-right: 100vw solid $lightgrey;
    border-bottom: 64px solid $baltic;
    border-left: 0;
    content: '';
  }

  & .title {
    margin: 0;
    margin-bottom: 40px;
    padding: 0;
    color: $thunder;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }

  & .tasks-list {
    padding-left: 23px;
  }

  & .task-item {
    position: relative;
    margin-bottom: 18px;
    color: $thunder;

    &::before {
      position: absolute;
      top: 6px;
      left: -20px;
      width: 10px;
      height: 10px;
      background: $christi;
      border-radius: 50%;
      content: '';
    }
  }

  & .screen-wrap {
    position: relative;
    width: 600px;
    align-self: center;
  }

  & .pause-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@include minitablet {
  .tasks {
    top: 0px;

    & .task-item {
      margin-bottom: 14px;
    }

    & .title {
      margin-bottom: 30px;
    }
  }
}

@include bigmobile {
  .tasks {
    flex-wrap: wrap;
    gap: 55px;

    &::after {
      border-bottom: 24px solid $baltic;
    }

    &.container {
      padding: 0;
      padding-bottom: 91px;
    }

    & .title {
      max-width: 300px;
    }

    & .tasks-list {
      max-width: 270px;
    }

    & .tasks-wrap {
      padding: 0 25px;
    }

    & .screen-wrap {
      order: -1;
    }
  }
}

@include bigdesktop {
  .tasks {
    justify-content: center;
    gap: 150px;
  }
}
</style>
