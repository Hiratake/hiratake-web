<template>
  <ol class="app-breadcrumbs">
    <template v-for="(item, index) in _items">
      <li :key="item.id" class="app-breadcrumbs__item">
        <span v-if="index !== 0" class="app-breadcrumbs__icon material-icons">
          chevron_right
        </span>
        <component :is="item.tag" :to="item.to" :class="item.class">
          {{ item.label }}
        </component>
      </li>
    </template>
  </ol>
</template>

<script>
export default {
  name: 'AppBreadcrumbs',

  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },

  computed: {
    _items () {
      return [...this.items].map((item, index) => ({
        id: index + 1,
        tag: (item.disabled || !item.to) ? 'span' : 'nuxt-link',
        class: {
          'app-breadcrumbs__link': !(item.disabled || !item.to),
          'app-breadcrumbs__label': item.disabled || !item.to,
        },
        label: item.label ? item.label : '',
        to: (item.to && !item.disabled) ? item.to : null,
        disabled: !!item.disabled,
      }))
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.app-breadcrumbs';

.app-breadcrumbs {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  width: 100%;
  font-size: 12px;
  color: var(--color-text-muted);
  list-style: none;
}

.app-breadcrumbs__item {
  display: inline-flex;
  gap: inherit;

  &:last-child {
    font-weight: $font-weight-bold;
  }
}

.app-breadcrumbs__icon {
  position: relative;
  top: 2px;
  font-size: 16px;
  user-select: none;
}

.app-breadcrumbs__link {
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
</style>
