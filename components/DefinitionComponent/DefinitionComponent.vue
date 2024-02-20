<template>
  <div class="definition container">
    <div class="definition-wrap">
      <h2 class="title">{{ $t('definition.title') }}</h2>
      <div class="definition-list">
        <div class="left-wrap">
          <div class="definition-item">
            <div class="img-wrap">
              <img
                class="definition-img quality-img"
                src="/content-img/quality.png"
                width="38"
                height="41"
              />
            </div>
            <div class="text-wrap">
              {{ $t('definition.quality') }}
            </div>
          </div>
          <div class="definition-item">
            <div class="img-wrap">
              <img
                class="definition-img computer-img"
                src="/content-img/computer.png"
                width="38"
                height="34"
              />
            </div>
            <div class="text-wrap">
              {{ $t('definition.integration') }}
            </div>
          </div>
        </div>
        <div class="right-wrap">
          <div class="definition-item">
            <div class="img-wrap">
              <img
                class="definition-img"
                src="/content-img/api.png"
                width="38"
                height="34"
              />
            </div>
            <div class="text-wrap">{{ $t('definition.functionality') }}</div>
          </div>
          <div class="definition-item">
            <div class="img-wrap">
              <img
                class="definition-img lines-img"
                src="/content-img/lines.png"
                width="38"
                height="34"
              />
            </div>
            <div class="text-wrap">{{ $t('definition.code') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.definition {
  padding-top: 60px;
  padding-bottom: 179px;
  color: $alabaster;

  & .quality-img {
    width: 58px;
  }

  & .computer-img {
    width: 42px;
  }

  & .lines-img {
    width: 32px;
  }

  & .title {
    margin: 0;
    margin-bottom: 60px;
    padding: 0;
    font-weight: 700;
    font-size: 22px;
  }

  & .definition-item {
    display: flex;
    gap: 18px;
    align-items: center;
    margin-bottom: 30px;
    line-height: 20px;
  }

  & .definition-list {
    display: flex;
    gap: 77px;
  }

  & .left-wrap {
    max-width: 400px;
  }
}

@include tablet {

  .definition {
    color: $white;

    & .definition-list {
      flex-wrap: wrap;
      gap: 0;
    }
  }
}

@include bigmobile {

  .definition {

    & .title {
      margin-bottom: 40px;
    }
  }
}

@include bigdesktop {

  .definition-wrap {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
