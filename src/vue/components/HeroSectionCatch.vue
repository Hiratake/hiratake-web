<template>
  <div class="p-heroSectionCatch">
    <h2 class="p-heroSectionCatch__catch p-heroSectionCatch__catch--en">
      I write CSS <br class="p-heroSectionCatch__br p-heroSectionCatch__br--pc">and watch Precure.
    </h2>
    <p class="p-heroSectionCatch__catch p-heroSectionCatch__catch--ja">
      CSSをかいたり、<br class="p-heroSectionCatch__br p-heroSectionCatch__br--mobile">プリキュアを応援したりしてます。
    </p>
  </div>
</template>

<style lang="scss">
.p-heroSectionCatch {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  gap: $size-base*2;
}

.p-heroSectionCatch__catch {
  text-align: center;

  @include bp( md ) {
    gap: $size-base*4;
    text-align: left;
  }

  &--en {
    font-family: $font-family-en;
    font-size: $font-size-l5;
    font-weight: $font-weight-bold;
    line-height: 1.1;

    @include bp( sm ) {
      font-size: $font-size-l6;
    }
    @include bp( md ) {
      font-size: $font-size-l6 * 1.2;
    }
    @include bp( lg ) {
      font-size: $font-size-l6 * 1.6;
    }
  }
  &--ja {
    font-size: $font-size-l3;
  }
}
.p-heroSectionCatch__br {
  &--mobile {
    display: block;

    @include bp( sm ) {
      display: none;
    }
  }
  &--pc {
    display: none;

    @include bp( md ) {
      display: block;
    }
  }
}
</style>
