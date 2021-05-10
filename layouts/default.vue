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
  --color-background: #{$color-white};

  &.dark {
    --color-text: #{$color-white};
    --color-background: #{$color-gray-800};
  }
}

* {
  transition-duration: 0.1s;
  transition-property: color, background-color;
}

body {
  background-color: var(--color-background);
}
</style>
