<template>
  <div class="app-tab">
    <div class="app-tab__header">
      <template v-for="(item, index) in headers">
        <button
          :key="item.key"
          :class="{ 'app-tab__header-item--current': value === index}"
          class="app-tab__header-item"
          @click="click(index)"
        >
          {{ item.label }}
        </button>
      </template>
    </div>
    <div class="app-tab__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTab',

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    headers: {
      default: () => [],
      type: Array,
      validator: (val) => {
        return val.every(item => item.label && item.key)
      },
    },
    value: {
      default: null,
      type: Number,
    },
  },

  methods: {
    click (val, $event) {
      this.$emit('click', $event)
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.app-tab';

.app-tab {
  width: 100%;
  overflow: hidden;
}

.app-tab__header {
  display: flex;
  justify-content: center;
  padding: 0 16px;
  border-bottom: solid 4px $color-primary;

  @include breakpoint(sm) {
    justify-content: flex-start;
  }
}

.app-tab__header-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 36px;
  font-family: $font-family-en;
  font-size: 14px;
  font-weight: $font-weight-bold;
  background-color: var(--color-tab);
  border-color: var(--color-tab);
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-radius: 8px 8px 0 0;
  transition-property: color, background-color, border-color;

  & ~ & {
    margin-left: 4px;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: -4px;
    left: 0;
    height: 4px;
    content: '';
    background-color: transparent;
  }

  &--current {
    background-color: transparent;
    border-color: $color-primary;

    &::after {
      background-color: var(--color-background);
    }
  }
}

.app-tab__body {
  position: relative;
  width: 100%;
  margin-top: 56px;
}
</style>
