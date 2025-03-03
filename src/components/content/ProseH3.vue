<script lang="ts" setup>
type ProseH3Props = {
  id?: string
}

const props = withDefaults(defineProps<ProseH3Props>(), {
  id: undefined,
})

const { headings } = useRuntimeConfig().public.mdc

/** リンクを設定するか */
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === 'boolean' &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h3)),
)
</script>

<template>
  <h3 :id="id" class="font-bold md:text-2xl">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="relative font-bold no-underline before:absolute before:-left-5 before:top-0.5 before:hidden before:text-[0.7em] before:leading-8 before:opacity-0 before:content-['#'] hover:underline hover:before:opacity-40 md:before:block"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
