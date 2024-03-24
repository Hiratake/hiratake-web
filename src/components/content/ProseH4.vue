<script lang="ts" setup>
type ProseH4Props = {
  id?: string
}

const props = withDefaults(defineProps<ProseH4Props>(), {
  id: undefined,
})

const { headings } = useRuntimeConfig().public.mdc

/** リンクを設定するか */
const generate = computed(() => props.id && headings?.anchorLinks?.h4)
</script>

<template>
  <h4 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="font-bold no-underline hover:underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>
