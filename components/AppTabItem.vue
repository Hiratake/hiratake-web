<template>
  <transition>
    <div
      v-show="visible"
      :class="classes"
      class="app-tab-item"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppTabItem',

  props: {},

  data () {
    return {
      index: 0,
    }
  },

  computed: {
    classes () {
      return {
        'app-tab-item--active': this.visible,
      }
    },
    visible () {
      return this.$parent && this.$parent.value
        ? this.$parent.value === this.index + 1
        : false
    },
  },

  mounted () {
    this.getCurrentIndex()
  },

  methods: {
    getCurrentIndex () {
      const element = this.$el
      this.index = [...(element.parentNode.childNodes)]
        .filter(item => item.className && item.classList.contains('app-tab-item'))
        .findIndex(item => item === element)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.app-tab-item';

.app-tab-item {
  position: absolute;
  top: 0;
  left: 0;

  &--active {
    position: relative;
  }

  &.v-enter-active,
  &.v-leave-active {
    transition-property: color, background-color, opacity, transform;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }

  &.v-enter {
    transform: translateY(10px);
  }

  &.v-leave-to {
    transform: translateY(-10px);
  }
}
</style>
