<template>
  <div class="c-socialLink">
    <a  class="c-socialLink__link" target="_blank"
        rel="noopener" v-for="item in links"
        :key="item.name" :href="item.url" :data-brand="item.name">
      <i :class="'fab fa-'+item.name"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'twitter',
          url:  'https://twitter.com/Hirotaisou2012'
        },
        {
          name: 'github',
          url:  'https://github.com/Hiratake'
        },
        {
          name: 'discord',
          url:  'https://discordapp.com/users/221498004505362433'
        }
      ]
    }
  }
}
</script>

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
