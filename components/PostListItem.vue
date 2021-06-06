<template>
  <div :id="id" class="post-list-item">
    <div class="post-list-item__meta">
      <span>posted on</span>
      <component
        :is="post.postedOn.icon"
        v-if="post.postedOn.icon"
        class="post-list-item__service-icon"
      />
      <span>{{ post.postedOn.name }}</span>
      <span style="opacity: 0.4;">/</span>
      <span>{{ dateToString(post.createdAt) }}</span>
    </div>
    <component
      :is="post.postedOn.slug === 'blog' ? 'nuxt-link' : 'a'"
      :to="post.postedOn.slug === 'blog' ? post.url : null"
      :href="post.postedOn.slug !== 'blog' ? post.url : null"
      class="post-list-item__title"
    >
      {{ post.title }}
    </component>
  </div>
</template>

<script>
import IconJao from '@/assets/images/jao.svg?inline'
import IconZenn from '@/assets/images/zenn.svg?inline'

export default {
  name: 'PostListItem',

  components: {
    IconJao,
    IconZenn,
  },

  props: {
    posts: {
      default: () => [],
      type: Array,
      required: true,
    },
    index: {
      default: null,
      type: Number,
      required: true,
      validator: (val) => {
        return val >= 0
      },
    },
  },

  computed: {
    post () {
      return this.posts[this.index]
    },
    id () {
      const prefix = 'posts-'
      const index = this.index
      const currentItem = this.post.createdAt.getFullYear()
      if (index) {
        const previousItem = this.posts[index - 1].createdAt.getFullYear()
        return currentItem !== previousItem ? `${prefix}${currentItem}` : null
      }
      else {
        return `${prefix}${currentItem}`
      }
    },
  },

  methods: {
    dateToString (val) {
      const year = val.getFullYear()
      const month = ('0' + (val.getMonth() + 1)).slice(-2)
      const date = ('0' + val.getDate()).slice(-2)
      return `${year}-${month}-${date}`
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.post-list-item';

.post-list-item {
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 100%;
  gap: 8px;
  padding: 24px 0 24px 52px;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    display: block;
    width: 1px;
    content: '';
    background-color: var(--color-timeline);
  }

  &::after {
    position: absolute;
    top: 30px;
    left: 0;
    display: block;
    width: 11px;
    height: 11px;
    content: '';
    background-color: var(--color-background);
    border: solid 2px var(--color-timeline);
    border-radius: 50%;
  }
}

.post-list-item__meta {
  display: flex;
  align-items: center;
  font-family: $font-family-en;
  font-size: 13px;
  font-weight: $font-weight-bold;
  color: var(--color-text-muted);

  * ~ * {
    margin-left: 5px;
  }
}

.post-list-item__service-icon {
  position: relative;
  top: 2px;
  width: 22px;
  height: 22px;
}

.post-list-item__title {
  font-size: 18px;
  font-weight: $font-weight-bold;
  color: currentColor;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
