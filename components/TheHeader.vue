<template>
  <app-container tag="header" class="the-header">
    <div class="the-header__body">
      <nuxt-link class="the-header__logo" to="/">
        <app-logo />
      </nuxt-link>
      <app-button
        :color="dark ? 'gray-800' : 'white'"
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

  computed: {
    dark () {
      return this.$colorMode.value === 'dark'
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
  height: 104px;
}

.the-header__logo {
  display: inline-flex;
  width: 168px;
}
</style>
