<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

type DocumentRendererProps = {
  data: BlogCollectionItem
}

const props = defineProps<DocumentRendererProps>()
</script>

<template>
  <div class="text-[0.925rem] tracking-wide [&>div]:*:first:mt-0">
    <ContentRenderer :value="props.data">
      <template #empty>
        <DocumentEmpty />
      </template>
    </ContentRenderer>
  </div>
</template>
