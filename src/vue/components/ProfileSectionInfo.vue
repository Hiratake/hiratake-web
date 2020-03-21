<template>
  <div class="p-profileSectionInfo">
    <div class="p-profileSectionInfo__item">
      <img  src="https://secure.gravatar.com/avatar/16f38857b5cc103612d1c3f2ff5df26e?s=64"
            class="p-profileSectionInfo__image" alt="icon">
      <span class="p-profileSectionInfo__text p-profileSectionInfo__text--large">
        Hiratake
      </span>
    </div>
    <div class="p-profileSectionInfo__item">
      <span class="p-profileSectionInfo__icon">
        <i class="fas fa-map-marker-alt"></i>
      </span>
      <span class="p-profileSectionInfo__text p-profileSectionInfo__text--small">
        Osaka, Japan
      </span>
    </div>
    <div class="p-profileSectionInfo__item">
      <span class="p-profileSectionInfo__icon">
        <i class="fas fa-birthday-cake"></i>
      </span>
      <span class="p-profileSectionInfo__text p-profileSectionInfo__text--small">
        1997 / 10 / 20
      </span>
    </div>
    <div class="p-profileSectionInfo__item">
      <span class="p-profileSectionInfo__icon">
        <i class="fas fa-heart"></i>
      </span>
      <span class="p-profileSectionInfo__text p-profileSectionInfo__text--small">
        読書、ゲーム<br>
        アニメ鑑賞<br>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.p-profileSectionInfo {
  width: 100%;
  max-width: $size-base*31;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  gap: $size-base*4;
}
.p-profileSectionInfo__item {
  width: 100%;
  display: flex;
  align-items: center;
}
.p-profileSectionInfo__image {
  width: $size-base*8;
  height: $size-base*8;
  border: solid $size-base/4 $color-primary;
  border-radius: 50%;
}
.p-profileSectionInfo__icon {
  min-width: $size-base*8;
  display: flex;
  justify-content: center;
  font-size: $size-base*3;
}
.p-profileSectionInfo__text {
  width: 100%;
  font-family: $font-family-en;

  &--large {
    padding-left: $size-base*3;
    font-size: $font-size-l6;
    font-weight: $font-weight-bold;
  }
  &--small {
    padding-left: $size-base*3.5;
    font-size: $font-size-l3;

    @include bp( md ) {
      font-size: $font-size-l4;
    }
  }
}
</style>
