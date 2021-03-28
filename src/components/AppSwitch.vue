<template>
  <div
    :class="classes"
    :style="styles"
    @click="click"
  >
    <input
      class="app-switch__input"
      type="checkbox"
    />
    <div class="app-switch__track"></div>
    <div class="app-switch__ripple"></div>
    <div class="app-switch__thumb"></div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        'app-switch': true,
        'app-switch--active': this.value,
      }
    },
    styles() {
      return {
        color: this.color,
      }
    },
  },
  methods: {
    click(e) {
      console.log(e)
      this.$emit('change', !this.value)
    },
  },
}
</script>
<style scoped>
.app-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 56px;
  color: var(--color-primary);
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
  transition-duration: 0.1s;
}

.app-switch__input {
  position: absolute;
  user-select: none;
  opacity: 0;
}

.app-switch__track {
  position: absolute;
  right: 0;
  left: 0;
  width: 40px;
  height: 20px;
  margin: auto;
  background-color: var(--color-background-tertiary);
  border-radius: 10px;
}

.app-switch__ripple {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.2;
  transition-timing-function: inherit;
  transition-duration: inherit;
  transition-property: transform;
}

.app-switch__ripple::before {
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  background-color: currentColor;
  border-radius: 50%;
  transition-duration: inherit;
  transition-property: inherit;
  transform: scale(1);
}

.app-switch__thumb {
  position: relative;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition-timing-function: inherit;
  transition-duration: inherit;
  transition-property: background-color transform;
}

.app-switch--active .app-switch__ripple,
.app-switch--active .app-switch__thumb {
  background-color: currentColor;
  transform: translate(28px);
}

.app-switch:hover .app-switch__ripple::before,
.app-switch:focus-within .app-switch__ripple::before {
  transform: scale(1.5);
}
</style>
