<template>
  <footer class="l-footer">
    <Wrap class="l-footer__content">
      <a class="l-footer__logo" href="/">
        <Logo />
      </a>
      <SocialLink class="l-footer__socialLink" />
      <small class="l-footer__copyright">
        &copy; 2014-2020 Hiratake
      </small>
    </Wrap>
    <div class="l-footer__background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 847.9">
        <polygon points="0 0 0 353 600 6.4 1200 353 1200 0 0 0"/>
        <path d="M600.9,201,0,547.1V847.9H1200V545.3Zm449.8,623.6-40,23.3H769.5l-40.4-23.3V638.4l161.7-93.1,159.9,91.3Z"/>
      </svg>
    </div>
  </footer>
</template>

<script>
// Components
import Logo       from './Logo';
import SocialLink from './SocialLink';
import Wrap       from './Wrap';

export default {
  components: {
    Logo,
    SocialLink,
    Wrap
  }
}
</script>

<style lang="scss">
.l-footer {
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.l-footer__content {
  padding-bottom: $size-base*2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat( 3, auto );
  gap: $size-base*1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  color: $color-white;

  @include bp( sm ) {
    padding-bottom: $size-base*3;
    grid-template-columns: $size-base*17 $size-base*17 1fr;
    grid-template-rows: repeat( 2, auto );
    gap: $size-base*3;
  }
  @include bp( md ) {
    padding-bottom: $size-base*6;
    grid-template-columns: $size-base*20 $size-base*20 1fr;
    grid-template-rows: repeat( 2, auto );
    gap: $size-base*4;
  }
}
.l-footer__logo {
  width: $size-base*16;
  display: block;
  color: inherit;

  @include bp( sm ) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    width: 100%;
  }
}
.l-footer__socialLink {
  display: none;

  @include bp( sm ) {
    display: flex;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-self: end;
  }
}
.l-footer__copyright {
  font-family: $font-family-en;
  font-size: $font-size-l2;

  @include bp( sm ) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
}
.l-footer__background {
  width: 100%;
  margin-top: -1px;
  position: relative;
  z-index: 0;
  filter: drop-shadow( 0 $size-base/2 $size-base*4 $color-shadow );

  @include bp( md ) {
    filter: drop-shadow( 0 $size-base/2 $size-base*7 $color-shadow );
  }

  polygon {
    fill: $color-white;
  }
  path {
    fill: $color-black;
  }
}
</style>
