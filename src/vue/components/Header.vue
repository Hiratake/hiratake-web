<template>
  <header class="l-header">
    <a class="l-header__logo" href="/">
      <Logo />
    </a>
    <div class="l-header__social">
      <SocialLink />
    </div>
  </header>
</template>

<script>
// Components
import Logo       from './Logo';
import SocialLink from './SocialLink';

export default {
  components: {
    Logo,
    SocialLink
  }
}
</script>

<style lang="scss">
.l-header {
  width: 100%;
  max-width: $size-width-max;
  margin: auto;
  padding: $size-base*2 $size-base*2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @include bp( md ) {
    padding: $size-base*2 $size-base*4;
  }
}
.l-header__logo {
  width: $size-base*15;
  margin-top: $size-base*(-1);
  color: inherit;
  text-decoration: none;
  transition-duration: $transition-duration-base;

  @include bp( sm ) {
    width: $size-base*20;
    margin-top: 0;
  }
  @include bp( md ) {
    width: $size-base*25;
  }

  &:hover {
    color: $color-gray;
  }
}
</style>
