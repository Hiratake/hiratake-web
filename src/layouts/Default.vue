<template>
  <div class="layout">
    <the-header />
    <main class="main">
      <slot />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
.layout {
  display: grid;
  grid-template-rows: var(--size-outline) 1fr var(--size-outline);
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  padding: 0 var(--size-outline);
  color: var(--color-text);
  background-color: var(--color-background);
  transition-duration: var(--transition-duration);
  transition-property: color background-color;
}

.main {
  background-color: var(--color-background-secondary);
  border-radius: 4px;
}
</style>
