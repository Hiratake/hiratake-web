<template>
  <app-container class="page" tag="main">
    <div class="page__breadcrumbs">
      <app-breadcrumbs :items="breadcrumbs" />
    </div>
    <article class="page__post">
      <header class="page__post-header">
        <h1 class="page__post-title">{{ post.title }}</h1>
        <ul class="page__post-meta">
          <li class="page__post-meta-item">
            <span class="page__post-meta-icon material-icons">today</span>
            <span>{{ dateToString(post.createdAt) }}</span>
          </li>
          <li class="page__post-meta-item">
            <span class="page__post-meta-icon material-icons">update</span>
            <span>{{ dateToString(post.updatedAt) }}</span>
          </li>
        </ul>
      </header>
      <div class="page__post-body">
        <nuxt-content :document="post" />
      </div>
    </article>
  </app-container>
</template>

<script>
export default {
  async asyncData ({ params, error, $content, $cloudinary }) {
    const { slug } = params
    try {
      const profile = await $content('authors').fetch()
      const post = await $content('blog', slug).fetch()
      post.image = await $cloudinary.image.url(
        'post_uakfpm.png',
        {
          overlay: {
            font_family: 'notosansjp.otf',
            font_size: 56,
            text: encodeURI(post.title),
          },
          color: '#394147',
          width: 1000,
          x: 128,
          y: 136,
          gravity: 'north_west',
          crop: 'fit',
        },
      )
      post.createdAt = new Date(post.createdAt)
      post.updatedAt = new Date(post.updatedAt)
      if (post.description) {
        if (post.description.length > 80) {
          post.description = (
            post.description.substr(0, 80) + '...'
          )
        }
        post.description = post.description.replace(/\r?\n/g, '')
      }
      else {
        post.description = null
      }
      return { profile, post }
    }
    catch (e) {
      error({ statusCode: 404 })
    }
  },

  head () {
    const post = this.post
    const meta = []
    meta.push({
      hid: 'description',
      name: 'description',
      content: post.description ? post.description : this.$config.baseDescription,
    })
    meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: `${this.$config.baseUrl}/${post.slug}`,
    })
    meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: post.title,
    })
    meta.push({
      hid: 'og:description',
      property: 'og:description',
      content: post.description ? post.description : this.$config.baseDescription,
    })
    meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: post.image,
    })
    meta.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    return {
      title: post.title,
      meta,
      link: [
        { rel: 'canonical', href: `${this.$config.baseUrl}/${post.slug}` },
      ],
    }
  },

  jsonld () {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: this.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@id': `${this.$config.baseUrl}${item.to}`.replace(/^(.*)\/$/, '$1'),
            name: item.label,
          },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.post.title,
        description: this.post.description,
        url: `${this.$config.baseUrl}/${this.post.slug}`,
        datePublished: this.post.createdAt.toISOString(),
        dateModified: this.post.updatedAt.toISOString(),
        image: {
          '@type': 'ImageObject',
          url: this.post.image,
          width: 1200,
          height: 630,
        },
        author: {
          '@type': 'Person',
          name: this.profile.name,
        },
      },
    ]
  },

  computed: {
    breadcrumbs () {
      return [
        {
          label: 'Home',
          to: '/',
          disabled: false,
        },
        {
          label: this.post.title,
          to: `/${this.post.slug}`,
          disabled: true,
        },
      ]
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
$root: '.page';

.page {
  padding: 40px 0;
}

.page__breadcrumbs {
  padding: 0 4px;
}

.page__post {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 56px;
  margin-top: 56px;
}

.page__post-header {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  gap: 24px;
}

.page__post-title {
  font-size: 36px;
  font-weight: $font-weight-bold;
  line-height: 1.35;
}

.page__post-meta {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 0 2px;
  list-style: none;
}

.page__post-meta-item {
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 12px;
  color: var(--color-text-muted);
}

.page__post-meta-icon {
  position: relative;
  top: 2px;
  font-size: 16px;
  user-select: none;
}
</style>

<style lang="scss">
.nuxt-content {
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.5pt;

  & > * ~ * {
    margin-top: 40px;
  }

  a {
    color: var(--color-link);

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
