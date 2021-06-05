<template>
  <app-container class="page" tag="main">
    <div class="page__profile">
      <div class="page__profile-image">
        <app-image
          :src="profile.image"
          width="120px"
          height="120px"
        />
      </div>
      <div class="page__profile-content">
        <p class="page__profile-name">{{ profile.name }}</p>
        <p class="page__profile-bio">{{ profile.bio }}</p>
        <div class="page__profile-social">
          <template v-for="item in ['twitter', 'github', 'discord']">
            <a
              v-if="profile.social[item]"
              :key="item"
              :href="profile.social[item]"
              class="page__profile-social-item"
              target="_blank"
              rel="noopener"
            >
              <component
                :is="`icon-${item}`"
                class="page__profile-social-item-icon"
              />
            </a>
          </template>
        </div>
      </div>
    </div>

    <div class="page__content">
      <app-tab
        v-model="tab"
        :headers="[
          { label: 'posts', key: 'posts' },
          { label: 'works', key: 'works' },
        ]"
      >
        <app-tab-item>
          <pre>{{ posts }}</pre>
        </app-tab-item>
        <app-tab-item>
          <p>てすと</p>
        </app-tab-item>
      </app-tab>
    </div>
  </app-container>
</template>

<script>
import IconTwitter from '@/assets/images/twitter.svg?inline'
import IconGithub from '@/assets/images/github.svg?inline'
import IconDiscord from '@/assets/images/discord.svg?inline'

export default {
  components: {
    IconTwitter,
    IconGithub,
    IconDiscord,
  },

  async asyncData ({ $content }) {
    try {
      const profile = await $content('authors').fetch()
      const blog = await $content('blog')
        .only(['title', 'slug', 'createdAt'])
        .fetch()
      const contributions = await $content('posts').fetch()
      const posts = [...contributions.posts, ...blog]
        .map((item) => {
          const obj = {}
          obj.title = item.title
          obj.url = item.url ? item.url : `/${item.slug}`
          obj.createdAt = new Date(item.createdAt)
          obj.postedOn = item.postedOn ? item.postedOn : 'blog'
          return obj
        })
        .sort((a, b) => {
          const aTime = a.createdAt.getTime()
          const bTime = b.createdAt.getTime()
          if (aTime > bTime) {
            return -1
          }
          if (aTime < bTime) {
            return 1
          }
          return 0
        })
      return { profile, posts, blog }
    }
    catch (e) {
      throw new Error(e)
    }
  },

  data () {
    return {
      tab: 0,
    }
  },

  head () {
    return {
      titleTemplate: null,
      title: this.$config.baseName,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'assets/sass/_' as *;
$root: '.page';

.page__profile {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 56px 0;

  @include breakpoint(md) {
    padding: 80px 0;
  }
}

.page__profile-image {
  overflow: hidden;
  border-radius: 50%;
}

.page__profile-content {
  width: 100%;
  padding: 16px 40px 0 40px;
  font-family: $font-family-en;
  text-align: center;

  @include breakpoint(sm) {
    max-width: 400px;
    padding-top: 0;
    padding-right: 0;
    text-align: left;
  }
}

.page__profile-name {
  font-size: 36px;
  font-weight: $font-weight-bold;
}

.page__profile-bio {
  max-width: 320px;
  margin: auto;
  font-size: 14px;
  color: var(--color-text-muted);

  @include breakpoint(sm) {
    max-width: none;
  }
}

.page__profile-social {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @include breakpoint(sm) {
    justify-content: flex-start;
  }
}

.page__profile-social-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 2px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--color-text-muted);
  }

  & ~ & {
    margin-left: 8px;
  }
}

.page__profile-social-item-icon {
  width: 100%;
  fill: currentColor;
}

.page__content {
  padding: 24px 0 48px;

  @include breakpoint(md) {
    padding: 40px 0 80px;
  }
}
</style>
