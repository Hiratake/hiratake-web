<template>
  <div class="layout">
    <the-header />
    <main class="main">
      <slot />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
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
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
  transition-duration: var(--transition-duration);
  transition-property: color background-color;
}

.main {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: var(--color-background-secondary);
  border-radius: 4px;
}
</style>
