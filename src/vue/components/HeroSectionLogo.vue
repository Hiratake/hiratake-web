<template>
  <div class="p-heroSectionLogo">
    <svg  class="p-heroSectionLogo__logo" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80">
      <path d="M56.5,41.3,47.3,36V25.4l9.2-5.3,9.2,5.2V36ZM80,0V80H0V0ZM74.1,20.1,40,.5,5.9,20.2V59.8L40,79.4,74.1,59.6Z"/>
    </svg>
  </div>
</template>

<style lang="scss">
.p-heroSectionLogo {
  width: $size-base*16;
  height: $size-base*16;
  margin: auto;
  position: absolute;
  bottom: $size-base*(-20);
  left: 0;
  right: 0;
  overflow: hidden;
  background: $color-primary;

  @include bp( sm ) {
    width: $size-base*23;
    height: $size-base*23;
    bottom: $size-base*(-30);
  }
  @include bp( md ) {
    width: $size-base*34;
    height: $size-base*34;
    left: auto;
    right: $size-base*4;
    bottom: $size-base*(-7);
  }
  @include bp( lg ) {
    width: $size-base*38;
    height: $size-base*38;
    right: $size-base*6;
    bottom: $size-base*(-8);
  }
}
.p-heroSectionLogo__logo {
  fill: $color-white;
  width: 100%;
  height: 100%;
  filter: drop-shadow( 0 $size-base/2 $size-base*3 $color-shadow );

  @include bp( md ) {
    filter: drop-shadow( 0 $size-base/2 $size-base*4 $color-shadow );
  }
}
</style>
