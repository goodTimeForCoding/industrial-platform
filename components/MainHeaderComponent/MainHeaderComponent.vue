<template>
  <div class="main-header">
    <div class="wrap">
      <div class="left-wrap">
        <h1 class="title">{{ $t('mainHeader.title') }}</h1>
        <div class="collab-wrap">
          <div class="collab-img-wrap">
            <img
              class="collab-img"
              src="/content-img/gazprom-logo.png"
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
      <div class="right-wrap">
        <img
          class="screen-img"
          width="633"
          height="393"
          src="/content-img/screen-video.png"
          alt="Скрин видео"
        />
        <img
          class="pause-logo"
          src="/support-icons/pause-video.svg"
          alt="Логотип пауза"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-header {
  & .wrap {
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

  & .left-wrap {
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

  & .right-wrap {
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

    & .wrap {
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

    & .left-wrap {
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

    & .left-wrap {
      width: auto;
      padding: 0 25px 95px 25px;
    }

    & .title {
      margin-bottom: 29px;
      font-size: 35px;
    }

    & .wrap {
      flex-direction: column;
      gap: 57px;
    }

    & .screen-img {
      width: 100%;
    }
  }
}

// @include desktop {
//   .main-header {
//     & .wrap {
//       margin: 0 auto;
//     }
//   }
// }

@include bigdesktop {
  .main-header {
    & .wrap {
      margin: 0 auto;
      justify-content: center;
      gap: 150px;
    }
  }
}
</style>
