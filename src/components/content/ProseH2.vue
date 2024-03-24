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
  <h2 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="font-bold no-underline hover:underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
