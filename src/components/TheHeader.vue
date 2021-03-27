<template>
  <header class="the-header">
    <g-link
      to="/"
      class="the-header__logo"
    >
      <app-logo />
    </g-link>
  </header>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  name: 'TheHeader',
  components: {
    AppLogo,
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
</style>
