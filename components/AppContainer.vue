<template>
  <component :is="tag" class="app-container">
    <div class="app-container__body">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppContainer',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.app-container';

.app-container {
  width: 100%;
}

.app-container__body {
  width: 100%;
  max-width: $size-width-max;
  padding: 0 16px;
  margin: auto;

  @include breakpoint(md) {
    padding: 0 24px;
  }
}
</style>
