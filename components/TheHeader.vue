<template>
  <app-container tag="header" class="the-header">
    <div class="the-header__body">
      <nuxt-link class="the-header__logo" to="/">
        <app-logo />
      </nuxt-link>
      <app-button
        :color="dark ? 'gray-800' : 'white'"
        label="Color Mode"
        size="large"
        icon
        @click="toggleMode"
      >
        <span class="material-icons">
          {{ dark ? 'dark_mode' : 'light_mode' }}
        </span>
      </app-button>
    </div>
  </app-container>
</template>

<script>
export default {
  name: 'TheHeader',

  props: {
    dark: {
      default: false,
      type: Boolean,
    },
  },

  methods: {
    toggleMode () {
      this.$colorMode.preference = this.dark ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.the-header';

.the-header {
  background-color: transparent;
}

.the-header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.the-header__logo {
  display: inline-flex;
  width: 120px;
  opacity: 1;
  transition-property: color, background-color, opacity;

  &:hover {
    opacity: 0.6;
  }

  @include breakpoint(md) {
    width: 168px;
  }
}
</style>
