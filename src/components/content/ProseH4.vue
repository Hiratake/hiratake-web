<script lang="ts" setup>
type ProseH4Props = {
  id?: string
}

const props = withDefaults(defineProps<ProseH4Props>(), {
  id: undefined,
})

const { headings } = useRuntimeConfig().public.mdc

/** リンクを設定するか */
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === 'boolean' &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h4)),
)
</script>

<template>
  <h4 :id="id" class="font-bold md:text-lg">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="relative font-bold no-underline before:absolute before:-left-5 before:top-0.5 before:hidden before:text-[1em] before:leading-5 before:opacity-0 before:content-['#'] hover:underline hover:before:opacity-40 md:before:block"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>
