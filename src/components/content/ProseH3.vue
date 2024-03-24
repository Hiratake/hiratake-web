<script lang="ts" setup>
type ProseH3Props = {
  id?: string
}

const props = withDefaults(defineProps<ProseH3Props>(), {
  id: undefined,
})

const { headings } = useRuntimeConfig().public.mdc

/** リンクを設定するか */
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>

<template>
  <h3 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="font-bold no-underline hover:underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
