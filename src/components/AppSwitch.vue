<template>
  <label
    :class="classes"
    :style="styles"
    @click.prevent="click"
  >
    <span class="app-switch__action">
      <input
        class="app-switch__input"
        type="checkbox"
        role="switch"
        :aria-checked="value ? 'true' : 'false'"
        :aria-label="!hideLabel ? null : label ? label : null"
      />
      <div class="app-switch__track"></div>
      <div class="app-switch__ripple"></div>
      <div class="app-switch__thumb">
        <template v-if="icon.length">
          <font-awesome
            class="app-switch__icon"
            :icon="icon"
          />
        </template>
      </div>
    </span>
    <template v-if="label && !hideLabel">
      <span class="app-switch__label">{{ label }}</span>
    </template>
  </label>
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
    label: {
      type: String,
      default: '',
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    trueIcon: {
      type: Array,
      default: () => [],
    },
    falseIcon: {
      type: Array,
      default: () => [],
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
    icon() {
      return this.value ? [...this.trueIcon] : [...this.falseIcon]
    },
  },
  methods: {
    click() {
      this.$emit('change', !this.value)
    },
  },
}
</script>
<style scoped>
.app-switch {
  display: flex;
  align-items: center;
}

.app-switch__action {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 64px;
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
  width: 32px;
  height: 32px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition-timing-function: inherit;
  transition-duration: inherit;
  transition-property: background-color transform;
}

.app-switch__icon {
  color: var(--color-text-lighten);
}

.app-switch__label {
  margin-left: 8px;
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
