<template>
  <div class="post-list">
    <div class="post-list__buttons"></div>
    <div class="post-list__body">
      <template v-for="(post, index) in posts">
        <post-list-item :key="index" :posts="posts" :index="index" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',

  props: {
    posts: {
      default: () => [],
      type: Array,
      required: true,
      validator: (val) => {
        return val.every((item) => {
          return !!item.title && !!item.url && !!item.postedOn && !!item.createdAt
        })
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.post-list';

.post-list {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 80px 1fr;
  gap: 32px;
}
</style>
