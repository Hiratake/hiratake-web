<template>
  <section class="p-heroSection">
    <div class="p-heroSection__top">
      <Wrap>
        <HeroSectionCatch />
        <HeroSectionLogo />
      </Wrap>
    </div>
    <div class="p-heroSection__bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 558.5">
        <path d="M1200,911V561L600,907.6,0,561V911ZM0,352.5v14L600,713l600-346.5v-14Z" transform="translate(0 -352.5)"/>
      </svg>
    </div>
  </section>
</template>

<script>
// Components
import HeroSectionCatch from './HeroSectionCatch';
import HeroSectionLogo  from './HeroSectionLogo';
import Wrap             from './Wrap';

export default {
  components: {
    HeroSectionCatch,
    HeroSectionLogo,
    Wrap
  }
}
</script>

<style lang="scss">
.p-heroSection {
  position: relative;
  z-index: 0;
}

.p-heroSection__top {
  padding-top: $size-base*14;
  padding-bottom: $size-base*14;
  position: relative;
  z-index: 5;
  background: $color-white;

  @include bp( sm ) {
    padding-bottom: $size-base*20;
  }
  @include bp( md ) {
    padding-top: $size-base*20;
    padding-bottom: $size-base*4;
  }
  @include bp( lg ) {
    padding-top: $size-base*24;
    padding-bottom: $size-base*8;
  }
}

.p-heroSection__bottom {
  width: 100%;
  margin-top: -1px;
  position: relative;
  fill: $color-white;
  filter: drop-shadow( 0 $size-base/2 $size-base*4 $color-shadow );

  @include bp( md ) {
    filter: drop-shadow( 0 $size-base/2 $size-base*7 $color-shadow );
  }
}
</style>
