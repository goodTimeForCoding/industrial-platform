<template>
<!-- стили стоят scoped тут можно проще  -->
  <div class="main-header">
<!--  далее без  main-header- -->
    <div class="main-header-wrap">
<!--   левая сторона   -->
      <div class="main-header-left">
        <h1 class="title">{{ $t('mainHeader.title') }}</h1>
        <div class="collab-wrap">
          <div class="collab-img-wrap">
            <img
              class="collab-img"
              src="/gazprom-logo.png"
              width="84"
              height="43"
              alt="логотип Газпром"
            />
            <img
              class="collab-img"
              :src="$t('mainHeader.zyfraImg')"
              width="90"
              height="31"
              alt="логотип Цифра"
            />
          </div>
          <p class="collab-text">
            {{ $t('mainHeader.collab') }} <br />
            {{ $t('mainHeader.company') }}
          </p>
        </div>
      </div>
<!--   а почему тут не правая?   -->
      <div class="screen-wrap">
        <img
          class="screen-img"
          width="633"
          height="393"
          src="/screen-video.png"
          alt="Скрин видео"
        />
        <img class="pause-logo" src="/pause-video.svg" alt="Логотип пауза" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-header {
  & .main-header-wrap {
    display: flex;
    gap: 49px;
    justify-content: space-around;
    max-width: 1500px;
  }

  & .title {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    color: $white;
    font-weight: 800;
    font-size: 45px;
  }

  & .collab-text {
    margin: 0;
    padding: 0;
    color: $white;
    line-height: 20px;
  }

  & .main-header-left {
    width: 420px;
  }

  & .collab-wrap {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  & .collab-img-wrap {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  & .screen-wrap {
    position: relative;
  }

  & .screen-img {
    position: relative;
    z-index: 2;
    width: 604px;
    height: 100%;
  }

  & .pause-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 8;
    transform: translate(-50%, -50%);
  }
}

@include minidesk {
  .main-header {
    & .title {
      font-size: 35px;
    }

    & .main-header-wrap {
      gap: 20px;
    }
  }
}

@include tablet {
  .main-header {
    & .collab-wrap {
      column-gap: 10px;
    }

    & .title {
      font-size: 30px;
    }

    & .main-header-left {
      order: 1;
      align-self: center;
    }
  }
}

@include bigmobile {
  .main-header {
    & .collab-wrap {
      column-gap: 26px;
    }

    & .main-header-left {
      width: auto;
      padding: 0 25px 95px 25px;
    }

    & .title {
      margin-bottom: 29px;
      font-size: 35px;
    }

    & .main-header-wrap {
      flex-direction: column;
      gap: 57px;
    }

    & .screen-img {
      width: 100%;
    }
  }
}

@include desktop {
  .main-header {
    & .main-header-wrap {
      margin: 0 auto;
    }
  }
}

@include bigdesktop {
  .main-header {
    & .main-header-wrap {
      justify-content: center;
      gap: 150px;
    }
  }
}
</style>
