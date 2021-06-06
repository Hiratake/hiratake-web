<template>
  <div class="post-list">
    <div class="post-list__buttons">
      <template v-for="year in years">
        <app-button
          :key="year"
          :href="`#posts-${year}`"
          :color="dark ? 'gray-100' : 'gray-500'"
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
    dark: {
      default: false,
      type: Boolean,
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
  gap: 32px;

  @include breakpoint(md) {
    grid-template-rows: auto;
    grid-template-columns: 80px 1fr;
  }
}

.post-list__buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: auto;
  gap: 8px;

  @include breakpoint(md) {
    position: sticky;
    top: 24px;
    grid-template-columns: 100%;
    gap: 16px;
    align-content: flex-start;
    align-self: flex-start;
  }
}
</style>
