<template>
  <div
    :class="classes"
    :style="styles"
    class="app-image"
  >
    <img
      :src="src"
      :srcset="srcset"
      :alt="alt"
      class="app-image__body"
      loading="lazy"
      @load="load"
    >
    <transition>
      <div
        v-show="!isLoaded"
        class="app-image__loader"
      />
    </transition>
  </div>
</template>

<script>
import {
  validateSize,
} from '@/utils/sizes'

export default {
  name: 'AppImage',

  props: {
    src: {
      default: '',
      type: String,
      required: true,
    },
    srcset: {
      default: null,
      type: String,
    },
    sizes: {
      default: null,
      type: String,
    },
    alt: {
      default: '',
      type: String,
    },
    width: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    height: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    maxHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minWidth: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    minHeight: {
      default: null,
      type: [Number, String],
      validator: (val) => {
        return validateSize(val)
      },
    },
    contain: {
      default: false,
      type: Boolean,
    },
  },

  data () {
    return {
      isLoaded: false,
    }
  },

  computed: {
    classes () {
      return {
        'j-image--contain': this.contain,
      }
    },
    styles () {
      return {
        width: this.width,
        height: this.height,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight,
        'min-width': this.minWidth,
        'min-height': this.minHeight,
      }
    },
  },

  methods: {
    load (e) {
      this.isLoaded = true
      this.$emit('load', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.app-image';

.app-image {
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 2px;
  object-fit: cover;

  &--contain {
    object-fit: contain;
  }
}

.app-image__body {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;
}

.app-image__loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background-color: $color-gray-50;

  &.v-enter-active,
  &.v-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }
}
</style>
