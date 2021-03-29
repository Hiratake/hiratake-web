<template>
  <header
    class="the-header"
    role="banner"
  >
    <g-link
      to="/"
      class="the-header__logo"
      title="ホームへ戻る"
    >
      <app-logo />
    </g-link>
    <app-switch
      class="the-header__toggle-mode"
      label="モード切替"
      :value="darkMode"
      :hide-label="true"
      :true-icon="['fas', 'moon']"
      :false-icon="['fas', 'sun']"
      @change="toggleTheme"
    />
    <ul class="the-header__social-links">
      <li>
        <a
          aria-label="Twitter"
          href="https://twitter.com/Hirotaisou2012"
          target="_blank"
          rel="noopener norefferer"
        >
          <font-awesome :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a
          aria-label="GitHub"
          href="https://github.com/Hiratake"
          target="_blank"
          rel="noopener norefferer"
        >
          <font-awesome :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a
          aria-label="Discord"
          href="https://discord.com/users/221498004505362433"
          target="_blank"
          rel="noopener norefferer"
        >
          <font-awesome :icon="['fab', 'discord']" />
        </a>
      </li>
    </ul>
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
  gap: 16px;
  align-items: center;
}

.the-header__logo:hover {
  opacity: 0.85;
}

.the-header__toggle-mode {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}

.the-header__social-links {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, auto);
  grid-row: 1 / 2;
  grid-column: 4 / 5;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  line-height: 1;
  list-style: none;
}

.the-header__social-links a {
  display: block;
  padding: 8px;
  color: inherit;
  text-decoration: none;
  transition-duration: 0.1s;
  transition-property: color;
}

.the-header__social-links a:hover {
  color: var(--color-text-lighten);
}
</style>
