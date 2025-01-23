<script lang="ts" setup>
type ProseH2Props = {
  id?: string
}

const props = withDefaults(defineProps<ProseH2Props>(), {
  id: undefined,
})

const { headings } = useRuntimeConfig().public.mdc

/** リンクを設定するか */
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<template>
  <h2 :id="id" class="font-bold md:text-[1.875rem] md:leading-10">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="relative font-bold no-underline before:absolute before:top-1 before:-left-5 before:hidden before:text-[0.7em] before:leading-10 before:opacity-0 before:content-['#'] hover:underline hover:before:opacity-40 md:before:block"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
