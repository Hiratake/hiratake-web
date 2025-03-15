<script lang="ts" setup>
type ArticleRubyProps = {
  /** ルビの文字列 */
  ruby?: string
}

const props = withDefaults(defineProps<ArticleRubyProps>(), {
  ruby: '',
})
</script>

<template>
  <ruby>
    <slot />
    <rp>(</rp>
    <rt>{{ props.ruby }}</rt>
    <rp>)</rp>
  </ruby>
</template>
