<template>
  <div class="post-list">
    <div class="post-list__buttons">
      <template v-for="year in years">
        <app-button
          :key="year"
          :href="`#posts-${year}`"
          color="gray-300"
          size="small"
          outlined
        >
          {{ year }}
        </app-button>
      </template>
    </div>
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

  computed: {
    years () {
      const years = []
      this.posts.forEach((item) => {
        const year = item.createdAt.getFullYear()
        if (!years.includes(year)) {
          years.push(year)
        }
      })
      return years
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.post-list';

.post-list {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  gap: 16px 32px;

  @include breakpoint(md) {
    grid-template-rows: auto;
    grid-template-columns: 80px 1fr;
  }
}

.post-list__buttons {
  position: sticky;
  top: 24px;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 16px;
  align-content: flex-start;
  align-self: flex-start;
}
</style>
