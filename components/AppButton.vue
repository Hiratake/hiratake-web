<template>
  <component
    :is="_tag"
    :class="classes"
    :style="styles"
    :disabled="disabled"
    class="app-button"
    @click="click"
  >
    <span class="app-button__body">
      <slot />
    </span>
  </component>
</template>

<script>
import {
  colors,
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '@/utils/colors'

export default {
  name: 'AppButton',

  props: {
    tag: {
      default: 'button',
      type: String,
    },
    href: {
      default: null,
      type: String,
    },
    to: {
      default: null,
      type: String,
    },
    nuxt: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'medium',
      type: String,
      validator: (val) => {
        return ['large', 'medium', 'small'].includes(val)
      },
    },
    color: {
      default: 'primary',
      type: String,
      validator: (val) => {
        return validateColor(val)
      },
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    outlined: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    _tag () {
      return (this.to && (this.nuxt ? 'nuxt-link' : 'router-link')) ||
        (this.href && 'a') ||
        this.tag ||
        'button'
    },
    classes () {
      return {
        'app-button--large': this.size === 'large',
        'app-button--medium': this.size === 'medium',
        'app-button--small': this.size === 'small',
        'app-button--disabled': this.disabled,
        'app-button--outlined': this.outlined,
        'app-button--icon': this.icon,
      }
    },
    styles () {
      return {
        color: this.textColor,
        'background-color': this.backgroundColor,
      }
    },
    textColor () {
      const color = convertNameToHex(this.color)
      return this.disabled
        ? colors['gray-200']
        : this.outlined
          ? color
          : getContrastColor(color)
    },
    backgroundColor () {
      const color = convertNameToHex(this.color)
      return this.outlined
        ? 'transparent'
        : this.disabled
          ? colors['gray-50']
          : color
    },
  },

  methods: {
    click (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss">
@use 'assets/sass/_' as *;
$root: '.app-button';

.app-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  font: inherit;
  cursor: pointer;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  outline: none;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: inherit;
    pointer-events: none;
    content: '';
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition-duration: 0.1s;
    transition-property: color, background-color, opacity;
  }

  &:hover {
    &::before {
      opacity: 0.1;
    }
  }

  &--large {
    height: 48px;
    padding: 0 24px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  &--medium {
    height: 32px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }

  &--small {
    height: 24px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }

  &--disabled {
    pointer-events: none;
  }

  &--outlined {
    border-color: currentColor;
  }

  &--icon {
    padding: 0;
    line-height: 1;

    &#{$root} {
      &--large {
        width: 48px;
        font-size: 20px;
      }

      &--medium {
        width: 32px;
        font-size: 16px;
      }

      &--small {
        width: 24px;
        font-size: 12px;
      }
    }
  }
}

.app-button__body {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
}
</style>
