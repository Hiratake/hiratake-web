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
