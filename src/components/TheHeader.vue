<template>
  <header class="the-header">
    <g-link
      to="/"
      class="the-header__logo"
    >
      <app-logo />
    </g-link>
    <app-switch
      class="the-header__switch"
      :value="darkMode"
      :true-icon="['fas', 'moon']"
      :false-icon="['fas', 'sun']"
      @change="toggleTheme"
    />
  </header>
</template>

<script>
import AppLogo from '~/components/AppLogo'
import AppSwitch from '~/components/AppSwitch'

export default {
  name: 'TheHeader',
  components: {
    AppLogo,
    AppSwitch,
  },
  data() {
    return {
      darkMode: false,
    }
  },
  mounted() {
    if (window.__theme) {
      this.darkMode = window.__theme === 'dark'
    }
  },
  methods: {
    toggleTheme(val) {
      const mode = val ? 'dark' : 'light'
      window.__setPreferredTheme(mode)
      this.darkMode = val
    },
  },
}
</script>

<style scoped>
.the-header {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 152px 1fr repeat(2, auto);
  gap: 40px;
  align-items: center;
}

.the-header__logo:hover {
  opacity: 0.85;
}

.the-header__switch {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}
</style>
