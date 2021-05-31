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
  --color-primary: #{$color-primary};
  --color-text: #{$color-gray-700};
  --color-text-muted: #{$color-gray-500};
  --color-background: #{$color-white};
  --color-tab: #{$color-gray-50};

  &.dark {
    --color-text: #{$color-white};
    --color-text-muted: #{$color-gray-100};
    --color-background: #{$color-gray-800};
    --color-tab: #{$color-gray-700};
  }
}

*,
*::before,
*::after {
  transition-duration: 0.1s;
  transition-property: color, background-color;
}

body {
  font-family: $font-family-ja;
  color: var(--color-text);
  background-color: var(--color-background);
}
</style>
