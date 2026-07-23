<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

type DocumentRendererProps = {
  data: BlogCollectionItem
}

const props = defineProps<DocumentRendererProps>()
</script>

<template>
  <div
    class="prose dark:prose-invert max-w-none text-[0.925rem] leading-loose tracking-wide text-inherit [&>div>*:first-child]:mt-0"
  >
    <ContentRenderer :value="props.data">
      <template #empty>
        <DocumentEmpty />
      </template>
    </ContentRenderer>
  </div>
</template>
