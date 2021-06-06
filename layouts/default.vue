<template>
  <div>
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use 'assets/sass/_' as *;

:root {
  --color-text: #{$color-gray-700};
  --color-text-muted: #{$color-gray-500};
  --color-background: #{$color-white};
  --color-tab: #{$color-gray-50};
  --color-timeline: #{$color-gray-100};

  &.dark {
    --color-text: #{$color-white};
    --color-text-muted: #{$color-gray-100};
    --color-background: #{$color-gray-800};
    --color-tab: #{$color-gray-700};
    --color-timeline: #{$color-gray-300};
  }
}

*,
*::before,
*::after {
  transition-duration: 0.1s;
  transition-property: color, background-color;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $font-family-ja;
  color: var(--color-text);
  background-color: var(--color-background);
}
</style>
