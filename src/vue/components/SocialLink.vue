<template>
  <div class="c-socialLink">
    <a  class="c-socialLink__link" target="_blank" rel="noopener"
        href="https://twitter.com/Hirotaisou2012" data-brand="twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a  class="c-socialLink__link" target="_blank" rel="noopener"
        href="https://github.com/Hiratake" data-brand="github">
      <i class="fab fa-github"></i>
    </a>
    <a  class="c-socialLink__link" target="_blank" rel="noopener"
        href="https://discordapp.com/users/221498004505362433"
        data-brand="discord">
      <i class="fab fa-discord"></i>
    </a>
  </div>
</template>

<style lang="scss">
.c-socialLink {
  width: $size-base*14;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include bp( sm ) {
    width: $size-base*16;
  }
}
.c-socialLink__link {
  width: $size-base*3;
  height: $size-base*3;
  color: inherit;
  font-size: $size-base*3;
  line-height: 1;
  text-align: center;
  transition-duration: $transition-duration-base;

  &[data-brand="twitter"]:hover {
    color: $color-brand-twitter;
  }
  &[data-brand="github"]:hover {
    color: $color-brand-github;
  }
  &[data-brand="discord"]:hover {
    color: $color-brand-discord;
  }
}
</style>
