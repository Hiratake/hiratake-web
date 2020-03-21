<template>
  <div class="l-wrap">
    <slot />
  </div>
</template>

<style lang="scss">
.l-wrap {
  width: 100%;
  max-width: $size-width-content;
  margin: auto;
  padding: 0 $size-base*2;
  position: relative;

  @include bp( md ) {
    padding: 0 $size-base*4;
  }
}
</style>
